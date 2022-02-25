# ICarrying API

This API is an application for distributing products from suppliers to supermarkets. It allows markets to fill their inventory simply consulting, choosing and buying all the products in need from numerous suppliers, also this platform allows the client to track the delivery by geolocation system.

## How to get started (global):

This api has been deployed to heroku, so here is the link to access the api.

```
https://caps-icarryng.herokuapp.com
```

Now you have to use a api client program, as insomnia, for example, so you can access and test the api.

## How to get started (locally):

To run this service in your local you need to do some steps, starting with cloning this project from gitlab. Click on this link:

```
https://gitlab.com/Markinn/icarryng
```

Clone with the ssh option. After that, create a new diretory in your local, inside this directory use:

```
git clone <paste the url copied>
```

Move in the directory created and run you code editor (you can use visual studio code, for instance).
Now open you terminal inside de project and if you have yarn previously installed in you machine, run:

```
yarn install
```

You will install all the dependencies you need this way. And now you can see the code.

In case you don't have yarn installed, follow these steps:

Yarn installation. In your terminal type the following code:

```
npm install --global yarn
```

With yarn installed go to the directory of the project:

```
cd <your_project>
```

Run the code on your local. Open a terminal inside your project directory, and install the project dependencies:

```
yarn install
```

Run the service locally:

```
yarn dev
```

Now you have to use insomnia or other platform to access the API. Configure this platform with you localhost address in the port 3000.

- the service will be running at http://127.0.0.1:3000/

## Routes:

These are the endpoints you will need to access the API:

# Market:

The following endpoints will manage the clients (markets) features:

## POST /market

Create a new market.

- Does not need authentication.
- cnpj must have XX.XXX.XXX/XXXX-XX format.

### Request example:

```
{
	"name": "Guanabara1",
	"cnpj": "33.122.445/0000-88",
	"email": "guanabara1@mail.com",
	"password": "12345678",
	"address": "Av. das Américas, 3501, Barra da Tijuca, Rio de Janeiro, RJ"
}
```

### Response example:

- STATUS: 201 CREATED

```
{
  "id": "7b63d675-b2d6-4c6c-84c0-1250e740bd57",
  "name": "Guanabara1",
  "cnpj": "33.122.445/0000-88",
  "email": "guanabara1@mail.com",
  "address": "Av. das Américas, 3501, Barra da Tijuca, Rio de Janeiro, RJ"
}
```

## POST /login/market

Generate login token that will be necessary to others endpoints.

- Does not need authentication.

### Request example:

```
{
	"email": "carrefour@mail.com",
	"password": "12345678"
}
```

### Response example:

- STATUS: 200 OK

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYmMyZDQwNTAtYzU1NC00MDM4LWI5ZjEtZjA3NzUwZjgxMDZiIiwibmFtZSI6IkNhcnJlZm91ciIsImNucGoiOiIzMy4yMjIuNTU1LzAwMDAtOTYiLCJlbWFpbCI6ImNhcnJlZm91ckBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA4JExVMWRWenNvcXVvLjVTLlA1S05PbS52NlYyZWVtcy8wd0dDVFpVemV0eVAzZHJWZEJsOHhLIiwiYWRkcmVzcyI6IkF2LiBEb20gSMOpbGRlciBDw6JtYXJhLCA1NDc0LCBDYWNoYW1iaSwgUmlvIGRlIEphbmVpcm8sIFJKIn0sImlhdCI6MTY0NTc0ODk2MCwiZXhwIjoxNjQ1NzUyNTYwfQ.0_KAM9jM2GVM5NAXoh9FQl-_U8gOmMLvDmQVT4UaXeg"
}
```

## POST /supplier/<supplier_id>/vote

Allows market to give grade to the supplier.

- Need market authentication.
- Bearer token: market login token.
- Only accepts values between 1 and 10.

### Request example:

```
{
	"grade": 6
}
```

### Response example:

- STATUS: 200 OK

```
{
  "grade": 6,
  "market": {
    "id": "3fc52a30-a558-4172-aca7-cd39a62951c3",
    "name": "market",
    "cnpj": "33.222.555/0000-55",
    "email": "market@mail.com",
    "password": "$2b$08$REsf9ErDAhtvEj2ABPamieZxrX4orfwsDl7liqmTpeAbwutuO0Gzq",
    "address": "rua Polina, 123"
  },
  "supplier": {
    "id": "60ec3c71-5d3d-4e22-abd8-33f4ca74ab45",
    "name": "Kenzie Alimentos",
    "cnpj": "32.321.123/7777-10",
    "email": "kenziealimentos@hotmail.com",
    "password": "$2b$08$DhnhUTIvXtI55y24YGXUj.vJqBF.e.tdXhMHdlt5ilQw/dnaWXpca",
    "address": "Seminário Curitiba Paraná PR",
    "grade": 6
  },
  "id": "31500675-6de5-4712-a133-6ea264787378"
}
```

## GET /market

List all the registered markets.

- Does not need authentication.

### Request example:

```
no body
```

### Response example:

- STATUS: 200 OK

```
[
  {
    "id": "4fcea016-2810-4b2d-9473-62d0314e0850",
    "name": "Mercadinho do Iago",
    "cnpj": "12.345.123/1234-04",
    "email": "iago@mail.com",
    "address": "Potengi Natal RN"
  },
  {
    "id": "b0d1d8c6-ce1e-48e6-b31a-b1377ac9a5be",
    "name": "denise3",
    "cnpj": "33.222.550/0001-02",
    "email": "denise3@mail.com",
    "address": "Campo Grande Rio de Janeiro RJ"
  },
  {
    "id": "857f1405-47de-4bbe-a857-1c43f83ad744",
    "name": "Carrefour SP",
    "cnpj": "15.345.321/6534-54",
    "email": "carrefourspoficial@mail.com",
    "address": "Vila Olímpia São Paulo SP"
  }
]
```

## GET /market/<market_id>

This route get just one market, filtered by it's id.

- Does not need authentication.
- Use the market id in the route's parameter url.

### Request example:

```
    no body
```

### Response example:

- STATUS: 200 OK

```
{
  "id": "bc2d4050-c554-4038-b9f1-f07750f8106b",
  "name": "Carrefour",
  "cnpj": "33.222.555/0000-96",
  "email": "carrefour@mail.com",
  "address": "Av. Dom Hélder Câmara, 5474, Cachambi, Rio de Janeiro, RJ"
}
```

## PATCH /market/<market_id>

This update allows the client to update the market data.

- Need owner or adm authentication.
- Bearer token: market or adm login token.
- Use the market id in the route's parameter url.

### Request example:

```
{
	"name": "Carrefour atualizado"
}
```

### Response example:

- STATUS: 200 OK

```
{
  "id": "bc2d4050-c554-4038-b9f1-f07750f8106b",
  "name": "Carrefour atualizado",
  "cnpj": "33.222.555/0000-96",
  "email": "carrefour@mail.com",
  "address": "Av. Dom Hélder Câmara, 5474, Cachambi, Rio de Janeiro, RJ"
}
```

## DELETE /market/<market_id>

This route will delete one market, filtered by it's id.

- Need owner or adm authentication.
- Bearer token: market or adm login token.
- Use the market id in the route's parameter url.

### Request example:

```
    no body
```

### Response example:

- STATUS: 204 NO CONTENT

```
No body returned for response
```

# Supplier:

The following endpoints will manage the suppliers features:

## POST /supplier

Create a new supplier.

- Does not need authentication.
- cnpj must have XX.XXX.XXX/XXXX-XX format.

### Request example:

```
{
	"name": "Produtos Agrícolas",
  "cnpj": "33.444.666/0001-11",
  "email": "produtos@mail.com",
  "password": "12345678",
  "address": "Av. Brasil, 19.001, Irajá, Rio de Janeiro, RJ"
}
```

### Response example:

- STATUS: 201 CREATED

```
{
  "id": "c3520f49-f360-4538-a51e-2e2e8b81cc3f",
  "name": "Produtos Agrícolas",
  "cnpj": "33.444.666/0001-11",
  "email": "produtos@mail.com",
  "address": "Av. Brasil, 19.001, Irajá, Rio de Janeiro, RJ",
  "grade": 0
}
```

## POST /login/supplier

Generate login token that will be necessary to others endpoints.

- Does not need authentication.

### Request example:

```
{
	"email": "produtos@mail.com",
  "password": "12345678"
}
```

### Response example:

- STATUS: 200 OK

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYmMyZDQwNTAtYzU1NC00MDM4LWI5ZjEtZjA3NzUwZjgxMDZiIiwibmFtZSI6IkNhcnJlZm91ciIsImNucGoiOiIzMy4yMjIuNTU1LzAwMDAtOTYiLCJlbWFpbCI6ImNhcnJlZm91ckBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA4JExVMWRWenNvcXVvLjVTLlA1S05PbS52NlYyZWVtcy8wd0dDVFpVemV0eVAzZHJWZEJsOHhLIiwiYWRkcmVzcyI6IkF2LiBEb20gSMOpbGRlciBDw6JtYXJhLCA1NDc0LCBDYWNoYW1iaSwgUmlvIGRlIEphbmVpcm8sIFJKIn0sImlhdCI6MTY0NTc0ODk2MCwiZXhwIjoxNjQ1NzUyNTYwfQ.0_KAM9jM2GVM5NAXoh9FQl-_U8gOmMLvDmQVT4UaXeg"
}
```

## GET /supplier

List all the registered suppliers.

- Does not need authentication.

### Request example:

```
no body
```

### Response example:

- STATUS: 200 OK

```
[
  {
    "id": "25bd544d-5813-42a2-800a-03002f9a01f5",
    "name": "Denise entregas",
    "cnpj": "11.111.111/1111-15",
    "email": "deniseentregas@hotmail.com",
    "address": "Campo Grande Rio de Janeiro RJ",
    "grade": 4.1
  },
  {
    "id": "a8cc18a5-267e-4897-93d2-e51f2fbe0301",
    "name": "Fornecedora de alimentos João e compania limitada",
    "cnpj": "22.985.359/7410-15",
    "email": "fornecedora.joao@hotmail.com",
    "address": "Água Verde Curitiba Paraná PR",
    "grade": 9
  },
  {
    "id": "60ec3c71-5d3d-4e22-abd8-33f4ca74ab45",
    "name": "Kenzie Alimentos",
    "cnpj": "32.321.123/7777-10",
    "email": "kenziealimentos@hotmail.com",
    "address": "Seminário Curitiba Paraná PR",
    "grade": 6
  }
]
```

## GET /supplier/<supplier_id>

This route get just one supplier, filtered by it's id.

- Does not need authentication.
- Use the supplier id in the route's parameter url.

### Request example:

```
    no body
```

### Response example:

- STATUS: 200 OK

```
{
  "id": "25bd544d-5813-42a2-800a-03002f9a01f5",
  "name": "Denise entregas",
  "cnpj": "11.111.111/1111-15",
  "email": "deniseentregas@hotmail.com",
  "address": "Campo Grande Rio de Janeiro RJ",
  "grade": 4.1
}
```

## PATCH /supplier/<supplier_id>

This update allows the client to update the supplier data.

- Need owner or adm authentication.
- Bearer token: supplier or adm login token.
- Use the supplier id in the route's parameter url.

### Request example:

```
{
	"name": "Produtos Agrícolas Atualizado"
}
```

### Response example:

- STATUS: 200 OK

```
{
  "id": "c3520f49-f360-4538-a51e-2e2e8b81cc3f",
  "name": "Produtos Agrícolas Atualizado",
  "cnpj": "33.444.666/0001-11",
  "email": "produtos@mail.com",
  "address": "Av. Brasil, 19.001, Irajá, Rio de Janeiro, RJ",
  "grade": 0
}
```

## DELETE /supplier/<supplier_id>

This route will delete one supplier, filtered by it's id.

- Need owner or adm authentication.
- Bearer token: supplier or adm login token.
- Use the supplier id in the route's parameter url.

### Request example:

```
    no body
```

### Response example:

- STATUS: 204 NO CONTENT

```
No body returned for response
```

# Adm:

The following endpoints will manage the adm features:

## POST /adm

Create a new adm.

- Need adm authentication.

### Request example:

```
{
	"name": "Denise Belo",
	"email": "denise@mail.com",
	"password": "12345678"
}

```

### Response example:

- STATUS: 201 CREATED

```
{
  "id": "04c9eed1-60f3-45a2-9202-b32536682445",
  "name": "Denise Belo",
  "email": "denise@mail.com"
}
```

## POST /login/adm

Generate login token that will be necessary to others endpoints.

- Does not need authentication.

### Request example:

```
{
	"email": "denise@mail.com",
	"password": "12345678"
}
```

### Response example:

- STATUS: 200 OK

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYmMyZDQwNTAtYzU1NC00MDM4LWI5ZjEtZjA3NzUwZjgxMDZiIiwibmFtZSI6IkNhcnJlZm91ciIsImNucGoiOiIzMy4yMjIuNTU1LzAwMDAtOTYiLCJlbWFpbCI6ImNhcnJlZm91ckBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA4JExVMWRWenNvcXVvLjVTLlA1S05PbS52NlYyZWVtcy8wd0dDVFpVemV0eVAzZHJWZEJsOHhLIiwiYWRkcmVzcyI6IkF2LiBEb20gSMOpbGRlciBDw6JtYXJhLCA1NDc0LCBDYWNoYW1iaSwgUmlvIGRlIEphbmVpcm8sIFJKIn0sImlhdCI6MTY0NTc0ODk2MCwiZXhwIjoxNjQ1NzUyNTYwfQ.0_KAM9jM2GVM5NAXoh9FQl-_U8gOmMLvDmQVT4UaXeg"
}
```

## GET /adm

List all the registered adms.

- Does not need authentication.

### Request example:

```
no body
```

### Response example:

- STATUS: 200 OK

```
[
  {
    "id": "6e71181f-544d-4984-91cb-c5ae8816259d",
    "name": "Claudia Ferreira",
    "email": "claudia@mail.com"
  },
  {
    "id": "04c9eed1-60f3-45a2-9202-b32536682445",
    "name": "Denise Belo",
    "email": "denise@mail.com"
  }
]
```

## GET /adm/<adm_id>

This route get just one adm, filtered by it's id.

- Does not need authentication.
- Use the adm id in the route's parameter url.

### Request example:

```
    no body
```

### Response example:

- STATUS: 200 OK

```
{
  "id": "04c9eed1-60f3-45a2-9202-b32536682445",
  "name": "Denise Belo",
  "email": "denise@mail.com"
}
```

## PATCH /adm/<adm_id>

This update allows the adm to update his/her own data.

- Need adm authentication.
- Bearer token: adm login token.
- Use the adm id in the route's parameter url.

### Request example:

```
{
	"name": "Denise atualizado"
}
```

### Response example:

- STATUS: 204 NO CONTENT

```
No body returned for response
```

## DELETE /adm/<adm_id>

This route will delete one adm, filtered by it's id.

- Need adm authentication.
- Bearer token: adm login token.
- Use the adm id in the route's parameter url.

### Request example:

```
    no body
```

### Response example:

- STATUS: 204 NO CONTENT

```
No body returned for response
```

# Product:

The following endpoints will manage the products features:

## POST /product/supplier/<supplier_id>

Create a new product.

- Need supplier authentication.
- Bearer token: supplier login token.
- Use the supplier id in the route's parameter url.

### Request example:

```
{
	"name": "Pizza Congelada",
  "price": 9.99,
  "description": "Sabor: quatro queijos; Marca: seara",
  "image": "https://trimais.vteximg.com.br/arquivos/ids/1012905-1000-1000/foto_original.jpg?v=637395876706500000"
}
```

### Response example:

- STATUS: 201 CREATED

```
{
  "id": "4730670e-b54f-4876-bfd6-fb7daff8b1d3",
  "name": "Pizza Congelada",
  "price": 9.99,
  "description": "Sabor: quatro queijos; Marca: seara",
  "image": "https://trimais.vteximg.com.br/arquivos/ids/1012905-1000-1000/foto_original.jpg?v=637395876706500000",
  "supplierId": "25bd544d-5813-42a2-800a-03002f9a01f5"
}
```

## GET /product

List all the registered products.

- Does not need authentication.

### Request example:

```
no body
```

### Response example:

- STATUS: 200 OK

```
[
  {
    "id": "e309b145-4643-45ca-8dca-f5b072661ada",
    "name": "Pizza",
    "price": "9.99",
    "description": "Sabor calabresa, Marca sadia",
    "image": "https://superprix.vteximg.com.br/arquivos/ids/176449-600-600/Oleo-de-Soja-Soya-900ml.png?v=636470371263970000"
  },
  {
    "id": "4730670e-b54f-4876-bfd6-fb7daff8b1d3",
    "name": "Pizza Congelada",
    "price": "9.99",
    "description": "Sabor: quatro queijos; Marca: seara",
    "image": "https://trimais.vteximg.com.br/arquivos/ids/1012905-1000-1000/foto_original.jpg?v=637395876706500000"
  }
]
```

## GET /product/<product_id>

This route get just one product, filtered by it's id.

- Does not need authentication.
- Use the product id in the route's parameter url.

### Request example:

```
    no body
```

### Response example:

- STATUS: 200 OK

```
{
  "id": "4730670e-b54f-4876-bfd6-fb7daff8b1d3",
  "name": "Pizza Congelada",
  "price": "9.99",
  "description": "Sabor: quatro queijos; Marca: seara",
  "image": "https://trimais.vteximg.com.br/arquivos/ids/1012905-1000-1000/foto_original.jpg?v=637395876706500000"
}
```

## GET /product/supplier/<supplier_id>

This route get all products registered in one specific supplier, filtered by the supplier id.

- Does not need authentication.
- Use the supplier id in the route's parameter url.

### Request example:

```
    no body
```

### Response example:

- STATUS: 200 OK

```
[
  {
    "id": "e309b145-4643-45ca-8dca-f5b072661ada",
    "name": "Pizza",
    "price": "9.99",
    "description": "Sabor calabresa, Marca sadia",
    "image": "https://superprix.vteximg.com.br/arquivos/ids/176449-600-600/Oleo-de-Soja-Soya-900ml.png?v=636470371263970000"
  },
  {
    "id": "4730670e-b54f-4876-bfd6-fb7daff8b1d3",
    "name": "Pizza Congelada",
    "price": "9.99",
    "description": "Sabor: quatro queijos; Marca: seara",
    "image": "https://trimais.vteximg.com.br/arquivos/ids/1012905-1000-1000/foto_original.jpg?v=637395876706500000"
  }
]
```

## PATCH /product/<product_id>

This update allows the supplier to update the product data.

- Need owner supplier authentication.
- Bearer token: supplier login token.
- Use the product id in the route's parameter url.

### Request example:

```
{
	"price": "6.50"
}
```

### Response example:

- STATUS: 200 OK

```
{
  "id": "4730670e-b54f-4876-bfd6-fb7daff8b1d3",
  "name": "Pizza Congelada",
  "price": "6.50",
  "description": "Sabor: quatro queijos; Marca: seara",
  "image": "https://trimais.vteximg.com.br/arquivos/ids/1012905-1000-1000/foto_original.jpg?v=637395876706500000"
}
```

## DELETE /product/<product_id>

This route will delete one product, filtered by it's id.

- Need owner supplier authentication.
- Bearer token: supplier login token.
- Use the product id in the route's parameter url.

### Request example:

```
    no body
```

### Response example:

- STATUS: 204 NO CONTENT

```
No body returned for response
```

# Cart:

The following endpoints will manage the cart features:

## POST /cart/<product_id>

Add a product to the cart of the logged market.

- Need market authentication.
- Bearer token: market login token.
- Use the product id in the route's parameter url.

### Request example:

```
no body
```

### Response example:

- STATUS: 201 CREATED

```
{
  "status": "pending",
  "cart": {
    "id": "53e26a23-0b83-4225-864d-e556bb90f43b",
    "marketId": "bc2d4050-c554-4038-b9f1-f07750f8106b"
  },
  "product": {
    "id": "e309b145-4643-45ca-8dca-f5b072661ada",
    "name": "Pizza",
    "price": "9.99",
    "description": "Sabor calabresa, Marca sadia",
    "image": "https://superprix.vteximg.com.br/arquivos/ids/176449-600-600/Oleo-de-Soja-Soya-900ml.png?v=636470371263970000"
  },
  "id": "0d2a429d-eece-4982-ab3b-5a9de2c8f826"
}
```

## GET /cart

List all products in the owner cart.

- Need market authentication.
- Bearer token: market login token.

### Request example:

```
no body
```

### Response example:

- STATUS: 200 OK

```
[
  {
    "id": "e309b145-4643-45ca-8dca-f5b072661ada",
    "name": "Pizza",
    "price": "9.99",
    "description": "Sabor calabresa, Marca sadia",
    "image": "https://superprix.vteximg.com.br/arquivos/ids/176449-600-600/Oleo-de-Soja-Soya-900ml.png?v=636470371263970000"
  },
  {
    "id": "4730670e-b54f-4876-bfd6-fb7daff8b1d3",
    "name": "Pizza Congelada",
    "price": "9.99",
    "description": "Sabor: quatro queijos; Marca: seara",
    "image": "https://trimais.vteximg.com.br/arquivos/ids/1012905-1000-1000/foto_original.jpg?v=637395876706500000"
  }
]
```

# Buy:

The following endpoints will manage the buy features:

## POST /buy

Close the purchase of the logged market.

- Need market authentication.
- Bearer token: market login token.

### Request example:

```
no body
```

### Response example:

- STATUS: 201 CREATED

```
{
  "status": "sending",
  "id": "1903772a-2efe-4508-b7de-217571bdb23f"
}
```

## GET /buy/<buy_id>

List a specific purchase by it's id.

- Need market or adm authentication.
- Bearer token: market or adm login token.

### Request example:

```
no body
```

### Response example:

- STATUS: 200 OK

```
{
  "id": "1903772a-2efe-4508-b7de-217571bdb23f",
  "status": "sending"
}
```

# Truck:

The following endpoints will manage the trucks features:

## POST /truck

Create a new truck to delivery the purchase.

- Need adm authentication.
- Bearer token: adm login token.

### Request example:

```
{
	"plate": "EMX0D56"
}
```

### Response example:

- STATUS: 201 CREATED

```
{
  "plate": "EMX0D56",
  "id": "82de2b28-f222-4f15-8210-1f46f9bf4641"
}
```

## GET /truck

List all the registered trucks.

- Does not need authentication.

### Request example:

```
no body
```

### Response example:

- STATUS: 200 OK

```
[
  {
    "id": "6ef47c9e-6f44-4410-9d34-29ec93875d4c",
    "plate": "EMX0D55"
  },
  {
    "id": "82de2b28-f222-4f15-8210-1f46f9bf4641",
    "plate": "EMX0D56"
  }
]
```

## GET /truck/<truck_id>

This route get just one truck, filtered by it's id.

- Does not need authentication.
- Use the truck id in the route's parameter url.

### Request example:

```
    no body
```

### Response example:

- STATUS: 200 OK

```
{
  "id": "6ef47c9e-6f44-4410-9d34-29ec93875d4c",
  "plate": "EMX0D55"
}
```

## PATCH /truck/<truck_id>

This update allows the adm to update the truck data.

- Need adm authentication.
- Bearer token: adm login token.
- Use the truck id in the route's parameter url.

### Request example:

```
{
	"plate": "AAA7777"
}
```

### Response example:

- STATUS: 200 OK

```
{
  "id": "6ef47c9e-6f44-4410-9d34-29ec93875d4c",
  "plate": "AAA7777"
}
```

## DELETE /truck/<truck_id>

This route will delete one truck, filtered by it's id.

- Need adm authentication.
- Bearer token: adm login token.
- Use the truck id in the route's parameter url.

### Request example:

```
    no body
```

### Response example:

- STATUS: 204 NO CONTENT

```
No body returned for response
```

# Delivery:

The following endpoints will manage the delivery features:

## POST /delivery

Create a new delivery from supplier to market.

- Need adm authentication.
- Bearer token: adm login token.

### Request example:

```
{
	"status": "left for delivery",
	"address": "Ilha do Governador, Rio de Janeiro, RJ",
	"buy_id": "1903772a-2efe-4508-b7de-217571bdb23f",
	"trucks_id": "82de2b28-f222-4f15-8210-1f46f9bf4641"
}
```

### Response example:

- STATUS: 201 CREATED

```
{
  "status": "left for delivery",
  "address": "Ilha do Governador, Rio de Janeiro, RJ",
  "buy": {
    "id": "1903772a-2efe-4508-b7de-217571bdb23f",
    "status": "sending"
  },
  "trucks": {
    "id": "82de2b28-f222-4f15-8210-1f46f9bf4641",
    "plate": "EMX0D56"
  },
  "id": "b3fe528d-4b37-4bed-b34a-5934037f3f4d"
}
```

## GET /delivery

List all the registered deliveries.

- Need adm authentication.
- Bearer token: adm login token.

### Request example:

```
no body
```

### Response example:

- STATUS: 200 OK

```
[
  {
    "id": "8e3e68b6-0b99-4dc0-a16d-6129bde6f5fb",
    "status": "left for delivery",
    "address": "Copacabana, Rio de Janeiro, RJ"
  },
  {
    "id": "b3fe528d-4b37-4bed-b34a-5934037f3f4d",
    "status": "left for delivery",
    "address": "Ilha do Governador, Rio de Janeiro, RJ"
  }
]
```

## GET /delivery/<delivery_id>

This route get just one delivery, filtered by it's id.

- Need adm or market owner or supplier owner authentication.
- Use the delivery id in the route's parameter url.

### Request example:

```
    no body
```

### Response example:

- STATUS: 200 OK

```
{
  "id": "8e3e68b6-0b99-4dc0-a16d-6129bde6f5fb",
  "status": "left for delivery",
  "address": "Copacabana, Rio de Janeiro, RJ"
}
```

## PUT /delivery/<delivery_id>

This update allows the adm to update the delivery data.

- Need adm authentication.
- Bearer token: adm login token.
- Use the delivery id in the route's parameter url.

### Request example:

```
{
	"status": "left for delivery",
	"address": "Ponta Negra, Natal, RN",
	"buy_id": "8e095b34-e911-4c86-8b34-1bd46e8f3758",
	"trucks_id": "6ef47c9e-6f44-4410-9d34-29ec93875d4c"
}
```

### Response example:

- STATUS: 204 NO CONTENT

```
No body returned for response
```

## DELETE /delivery/<delivery_id>

This route will delete one delivery, filtered by it's id.

- Need adm authentication.
- Bearer token: adm login token.
- Use the delivery id in the route's parameter url.

### Request example:

```
    no body
```

### Response example:

- STATUS: 204 NO CONTENT

```
No body returned for response
```

# Delivery:

The following endpoints will manage the delivery features:

## POST /geolocalization/<delivery_id>

Create the geolocation for the delivery to be made.

- Need adm authentication.
- Bearer token: adm login token.
- Use the delivery id in the route's parameter url.

### Request example:

```
no body
```

### Response example:

- STATUS: 201 CREATED

```
{
  "lat": "-22.804798050000002",
  "lon": "-43.219915468838025",
  "display_name": "Ilha do Governador, Rio de Janeiro, Região Geográfica Imediata do Rio de Janeiro, Região Metropolitana do Rio de Janeiro, Região Geográfica Intermediária do Rio de Janeiro, Rio de Janeiro, Região Sudeste, Brasil",
  "address": {
    "place": "Ilha do Governador",
    "city": "Rio de Janeiro",
    "municipality": "Região Geográfica Imediata do Rio de Janeiro",
    "county": "Região Metropolitana do Rio de Janeiro",
    "state_district": "Região Geográfica Intermediária do Rio de Janeiro",
    "state": "Rio de Janeiro",
    "region": "Região Sudeste",
    "country": "Brasil",
    "country_code": "br"
  }
}
```

## Technologies

- Node.js;
- Typescript;
- Express;
- Yup;
- Postgres;
- Heroku;
- Igeo (location lib created for this project);
- Mailtrap;
- Open Street Map;
- Nominatim;

## Licenses

MIT
