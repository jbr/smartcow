var searchIndex = JSON.parse('{\
"smartcow":{"doc":"This crate offers a small utility type, <code>SmartCow</code> that …","t":[13,13,4,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Borrowed","Owned","SmartCow","as_ref","as_ref","borrow","borrow","borrow","borrow_mut","clone","clone_into","default","deref","eq","eq","eq","eq","fmt","fmt","from","from","from","from","from","hash","into","into_owned","to_owned","to_owned","to_string","try_from","try_into","type_id"],"q":["smartcow","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["a <code>std::str</code> borrow","a <code>smartstring::SmartString</code>","The primary type for this crate, which holds either a …","","","","","Returns a borrowed SmartCow with a shorter lifetime than …","","","","","","","","","","","","Returns the argument unchanged.","","","","","","Calls <code>U::from(self)</code>.","Build a ’static duplicate of this SmartCow by value, by …","","Build a ’static duplicate of this SmartCow by cloning a …","","","",""],"i":[1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"f":[0,0,0,[1],[1,2],[[]],[1,2],[1,1],[[]],[1,1],[[]],[[],1],[1],[[1,3],4],[[1,1],4],[[1,2],4],[[1,3],4],[[1,5],6],[[1,5],6],[[]],[2,1],[[[7,[2]]],1],[3,1],[[[9,[8]]],1],[1],[[]],[1,1],[[]],[1,1],[[],3],[[],10],[[],10],[[],11]],"p":[[4,"SmartCow"],[15,"str"],[3,"String"],[15,"bool"],[3,"Formatter"],[6,"Result"],[4,"Cow"],[3,"LazyCompact"],[3,"SmartString"],[4,"Result"],[3,"TypeId"]]},\
"smartstring":{"doc":"Smart String","t":[3,18,3,16,3,17,3,8,11,11,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,6,6],"n":["Compact","DEALLOC","Drain","InlineArray","LazyCompact","MAX_INLINE","SmartString","SmartStringMode","add","add","add","add","add","alias","as_mut","as_mut_str","as_ref","as_ref","as_str","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","capacity","clear","clone","clone_into","cmp","default","deref","deref_mut","drain","drop","drop","eq","eq","eq","eq","extend","extend","extend","extend","extend","extend","extend","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from_iter","from_iter","from_iter","from_iter","from_iter","from_iter","from_str","hash","index","index","index","index","index","index","index_mut","index_mut","index_mut","index_mut","index_mut","index_mut","insert","insert_str","into","into","into","into","into_iter","is_empty","is_inline","len","new","new_const","new_const","next","next_back","partial_cmp","partial_cmp","pop","push","push_str","remove","replace_range","retain","shrink_to_fit","size_hint","split_off","to_owned","to_string","truncate","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","write_str","CompactString","String"],"q":["smartstring","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","smartstring::alias",""],"d":["A compact string representation equal to <code>String</code> in size …","A constant to decide whether to turn a wrapped string back …","A draining iterator for a <code>SmartString</code>.","The inline string type for this layout.","A representation similar to <code>Compact</code> but which doesn’t …","The maximum capacity of an inline string, in bytes.","A smart string.","Marker trait for <code>SmartString</code> representations.","","","","","","Convenient type aliases.","","Get a reference to the string as a mutable string slice.","","","Get a reference to the string as a string slice.","","","","","","","","","","","Return the currently allocated capacity of the string.","Clear the string.","Clone a <code>SmartString</code>.","","","","","","Construct a draining iterator over a given range.","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","","","","","Returns the argument unchanged.","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","","","","","","","","","","","","","","","Insert a <code>char</code> into the string at the given index.","Insert a string slice into the string at the given index.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","Test whether the string is empty.","Test whether the string is currently inlined.","Return the length in bytes of the string.","Construct an empty string.","Construct an empty string.","Construct an empty string.","","","","","Pop a <code>char</code> off the end of the string.","Push a character to the end of the string.","Copy a string slice onto the end of the string.","Remove a <code>char</code> from the string at the given index.","Replaces a range with the contents of a string slice.","Filter out <code>char</code>s not matching a predicate.","Shrink the capacity of the string to fit its contents …","","Split the string into two at the given index.","","","Truncate the string to <code>new_len</code> bytes.","","","","","","","","","","","","","","A convenience alias for a <code>Compact</code> layout <code>SmartString</code>.","A convenience alias for a <code>LazyCompact</code> layout <code>SmartString</code>."],"i":[0,1,0,1,0,0,0,0,2,2,2,2,2,0,2,2,2,2,2,7,2,2,13,15,7,2,2,13,15,2,2,2,2,2,2,2,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,7,2,2,13,15,7,2,2,2,2,2,2,2,13,15,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7,2,13,15,7,2,2,2,2,2,2,7,7,2,2,2,2,2,2,2,2,2,7,2,2,2,2,7,2,13,15,7,2,13,15,7,2,13,15,2,0,0],"f":[0,0,0,0,0,0,0,0,[[[2,[1]],3]],[[[2,[1]],[2,[1]]]],[[[2,[1]],[2,[1]]]],[[[2,[1]],4]],[[[2,[1]],3]],0,[[[2,[1]]],4],[[[2,[1]]],4],[[[2,[1]]],4],[[[2,[1]]]],[[[2,[1]]],4],[[]],[[[2,[1]]],4],[[]],[[]],[[]],[[]],[[[2,[1]]],4],[[]],[[]],[[]],[[[2,[1]]],5],[[[2,[1]]]],[[[2,[1]]],[[2,[1]]]],[[]],[[[2,[1]],[2,[1]]],6],[[],[[2,[1]]]],[[[2,[1]]]],[[[2,[1]]]],[[[2,[1]]],[[7,[1]]]],[[[7,[1]]]],[[[2,[1]]]],[[[2,[1]],4],8],[[[2,[1]],4],8],[[[2,[1]],3],8],[[[2,[1]],[2,[1]]],8],[[[2,[1]],9]],[[[2,[1]],9]],[[[2,[1]],9]],[[[2,[1]],9]],[[[2,[1]],9]],[[[2,[1]],9]],[[[2,[1]],9]],[[[7,[1]],10],[[12,[11]]]],[[[2,[1]],10],[[12,[11]]]],[[[2,[1]],10],[[12,[11]]]],[[13,10],14],[[15,10],14],[[]],[3,[[2,[1]]]],[[[16,[4]]],[[2,[1]]]],[[[17,[4]]],[[2,[1]]]],[3,[[2,[1]]]],[[]],[4,[[2,[1]]]],[4,[[2,[1]]]],[[]],[[]],[9,[[2,[1]]]],[9,[[2,[1]]]],[9,[[2,[1]]]],[9,[[2,[1]]]],[9,[[2,[1]]]],[9,[[2,[1]]]],[4,[[12,[[2,[1]]]]]],[[[2,[1]]]],[[[2,[1]],[18,[5]]]],[[[2,[1]],[19,[5]]]],[[[2,[1]],[20,[5]]]],[[[2,[1]],21]],[[[2,[1]],[22,[5]]]],[[[2,[1]],[23,[5]]]],[[[2,[1]],[22,[5]]]],[[[2,[1]],[20,[5]]]],[[[2,[1]],21]],[[[2,[1]],[23,[5]]]],[[[2,[1]],[19,[5]]]],[[[2,[1]],[18,[5]]]],[[[2,[1]],5,24]],[[[2,[1]],5,4]],[[]],[[]],[[]],[[]],[[]],[[[2,[1]]],8],[[[2,[1]]],8],[[[2,[1]]],5],[[],[[2,[1]]]],[[],[[2,[15]]]],[[],[[2,[13]]]],[[[7,[1]]],25],[[[7,[1]]],25],[[[2,[1]],[2,[1]]],[[25,[6]]]],[[[2,[1]],4],[[25,[6]]]],[[[2,[1]]],[[25,[24]]]],[[[2,[1]],24]],[[[2,[1]],4]],[[[2,[1]],5],24],[[[2,[1]],4]],[[[2,[1]]]],[[[2,[1]]]],[[[7,[1]]]],[[[2,[1]],5],[[2,[1]]]],[[]],[[],3],[[[2,[1]],5]],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],12],[[],26],[[],26],[[],26],[[],26],[[[2,[1]],4],[[12,[11]]]],0,0],"p":[[8,"SmartStringMode"],[3,"SmartString"],[3,"String"],[15,"str"],[15,"usize"],[4,"Ordering"],[3,"Drain"],[15,"bool"],[8,"IntoIterator"],[3,"Formatter"],[3,"Error"],[4,"Result"],[3,"Compact"],[6,"Result"],[3,"LazyCompact"],[4,"Cow"],[3,"Box"],[3,"Range"],[3,"RangeTo"],[3,"RangeFrom"],[3,"RangeFull"],[3,"RangeInclusive"],[3,"RangeToInclusive"],[15,"char"],[4,"Option"],[3,"TypeId"]]},\
"static_assertions":{"doc":"Banner","t":[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],"n":["assert_cfg","assert_eq_align","assert_eq_size","assert_eq_size_ptr","assert_eq_size_val","assert_fields","assert_impl_all","assert_impl_any","assert_impl_one","assert_not_impl_all","assert_not_impl_any","assert_obj_safe","assert_trait_sub_all","assert_trait_super_all","assert_type_eq_all","assert_type_ne_all","const_assert","const_assert_eq","const_assert_ne"],"q":["static_assertions","","","","","","","","","","","","","","","","","",""],"d":["Asserts that a given configuration is set.","Asserts that types are equal in alignment.","Asserts that types are equal in size.","Asserts that values pointed to are equal in size.","Asserts that values are equal in size.","Asserts that the type has the given fields.","Asserts that the type implements <em>all</em> of the given traits.","Asserts that the type implements <em>any</em> of the given traits.","Asserts that the type implements exactly one in a set of …","Asserts that the type does <strong>not</strong> implement <em>all</em> of the given …","Asserts that the type does <strong>not</strong> implement <em>any</em> of the given …","Asserts that the traits support dynamic dispatch (…","Asserts that the trait is a child of all of the other …","Asserts that the trait is a parent of all of the other …","Asserts that <em>all</em> types in a list are equal to each other.","Asserts that <em>all</em> types are <strong>not</strong> equal to each other.","Asserts that constant expressions evaluate to <code>true</code>.","Asserts that constants are equal in value.","Asserts that constants are <strong>not</strong> equal in value."],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"p":[]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};