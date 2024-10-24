//Cuarto Ejercicio Leer y Escribir un Archivo JSON
import * as fs from 'fs';

interface Product {
    id: number;
    name: string;
    price: number;
}

//Leer Archivo JSON 
function readJsonFile(path: string): Product[]{
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
}

//Escribir Archivo JSON 
function writeJsonFile(path: string, products: Product[]): void{
    const data = JSON.stringify(products, null, 2);
    fs.writeFileSync(path, data, 'utf-8');
}

const filePath = './products.json';

//Leer Data
let products = readJsonFile(filePath);

//Modificar un producto
products[0].price = 120.99;

//Escribir Cambios
writeJsonFile(filePath, products);

console.log('File updated successfully.');