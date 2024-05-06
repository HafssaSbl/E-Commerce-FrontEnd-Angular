interface Category{
    id : Number;
    name : String;
    productDTOList: Product[];
    subCategoryDTOList: Category[];
}