#![forbid(unsafe_code)]
#![deny(
    clippy::dbg_macro,
    missing_copy_implementations,
    rustdoc::missing_crate_level_docs,
    missing_debug_implementations,
    nonstandard_style,
    unused_qualifications
)]
#![warn(missing_docs)]

/*!
This crate offers a small utility type, [`SmartCow`] that holds either
a [`&str`] or a [`smartstring::SmartString`] and offers various
convenience trait implementations.
*/
use smartstring::{LazyCompact, SmartString};
use std::{
    borrow::{Borrow, Cow},
    fmt::{Debug, Display, Formatter, Result},
    hash::{Hash, Hasher},
    ops::Deref,
};

/// The primary type for this crate, which holds either a borrowed str
/// or a [`SmartString`]
#[derive(Clone)]
pub enum SmartCow<'a> {
    /// a [`std::str`] borrow
    Borrowed(&'a str),
    /// a [`smartstring::SmartString`]
    Owned(SmartString<LazyCompact>),
}

impl SmartCow<'_> {
    /// Build a 'static duplicate of this SmartCow by cloning a
    /// reference. If you own the SmartCow, [`SmartCow::into_owned`]
    /// is preferable, as it will not allocate an unnecesssary owned
    /// value.
    ///
    /// This is identical to calling `self.clone().into_owned()`,
    /// which first allocates in the case of an owned variant by
    /// cloning, and then allocates in the case of a borrowed variant,
    /// with into_owned.
    pub fn to_owned(&self) -> SmartCow<'static> {
        self.clone().into_owned()
    }

    /// Build a 'static duplicate of this SmartCow by value, by
    /// allocating a SmartString if self is a SmartCow::Borrowed
    /// variant. If you do not have ownership of a SmartCow and need
    /// to create a 'static SmartCow from it by reference, use
    /// [`SmartCow::to_owned`]
    pub fn into_owned(self) -> SmartCow<'static> {
        match self {
            SmartCow::Borrowed(b) => SmartCow::Owned(SmartString::from(b)),
            SmartCow::Owned(o) => SmartCow::Owned(o),
        }
    }

    /// Returns a borrowed SmartCow with a shorter lifetime than the
    /// source. Borrowed variants will be reborrowed, and owned
    /// variants will be borrowed.
    pub fn borrow(&self) -> SmartCow<'_> {
        SmartCow::from(&**self)
    }
}

impl Default for SmartCow<'_> {
    fn default() -> Self {
        Self::Borrowed("")
    }
}

impl PartialEq<SmartCow<'_>> for SmartCow<'_> {
    fn eq(&self, other: &SmartCow<'_>) -> bool {
        **self == **other
    }
}

impl Eq for SmartCow<'_> {}

impl PartialEq<&str> for SmartCow<'_> {
    fn eq(&self, other: &&str) -> bool {
        &**self == *other
    }
}

impl PartialEq<String> for SmartCow<'_> {
    fn eq(&self, other: &String) -> bool {
        **self == **other
    }
}

impl PartialEq<&String> for SmartCow<'_> {
    fn eq(&self, other: &&String) -> bool {
        **self == **other
    }
}

impl Debug for SmartCow<'_> {
    fn fmt(&self, f: &mut Formatter<'_>) -> Result {
        Debug::fmt(&**self, f)
    }
}

impl Display for SmartCow<'_> {
    fn fmt(&self, f: &mut Formatter<'_>) -> Result {
        f.write_str(self)
    }
}

impl AsRef<str> for SmartCow<'_> {
    fn as_ref(&self) -> &str {
        self
    }
}

impl AsRef<[u8]> for SmartCow<'_> {
    fn as_ref(&self) -> &[u8] {
        self.as_bytes()
    }
}

impl<'a> From<&'a str> for SmartCow<'a> {
    fn from(s: &'a str) -> Self {
        Self::Borrowed(s)
    }
}

impl<'a> From<Cow<'a, str>> for SmartCow<'a> {
    fn from(s: Cow<'a, str>) -> Self {
        match s {
            Cow::Owned(string) => Self::Owned(SmartString::from(string)),
            Cow::Borrowed(s) => Self::Borrowed(s),
        }
    }
}

impl From<String> for SmartCow<'_> {
    fn from(s: String) -> Self {
        Self::Owned(SmartString::from(s))
    }
}

impl From<SmartString<LazyCompact>> for SmartCow<'_> {
    fn from(s: SmartString<LazyCompact>) -> Self {
        Self::Owned(s)
    }
}

impl From<SmartCow<'_>> for SmartString<LazyCompact> {
    fn from(value: SmartCow<'_>) -> Self {
        match value {
            SmartCow::Borrowed(b) => b.into(),
            SmartCow::Owned(o) => o,
        }
    }
}

impl Deref for SmartCow<'_> {
    type Target = str;

    fn deref(&self) -> &Self::Target {
        match self {
            Self::Borrowed(b) => b,
            Self::Owned(o) => o,
        }
    }
}

impl Borrow<str> for SmartCow<'_> {
    fn borrow(&self) -> &str {
        self
    }
}

impl Hash for SmartCow<'_> {
    fn hash<H: Hasher>(&self, state: &mut H) {
        self.deref().hash(state)
    }
}
