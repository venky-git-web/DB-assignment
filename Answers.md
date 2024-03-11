1. Each product in the "Product" collection is associated with exactly one category.
The association is established by storing the ObjectId of the corresponding category document in the category_id field of the product document.
By querying the "Product_Category" collection using the category_id stored in the product document, you can retrieve details about the category to which the product belongs.
This relationship allows for organizing and categorizing products effectively, facilitating tasks such as product filtering and searching based on category.


2. Embedding categories: Embed category information directly within each each product document
   Consistency Checks: Before inserting or updating a product ,ensure that the referenced category exists in the "product category "
   collection