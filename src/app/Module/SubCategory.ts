interface SubCategory{
    id : Number;
    name : String;
    productDTOList: Product[];
    //@JsonBackReference
    categoryId : Number;
}