"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Producto = /** @class */ (function () {
    function Producto(precio) {
        this.precio = precio;
    }
    Object.defineProperty(Producto.prototype, "precioP", {
        //Métodos Get y Set
        get: function () {
            return this.precio;
        },
        set: function (newPrecio) {
            this.precio = newPrecio;
        },
        enumerable: false,
        configurable: true
    });
    return Producto;
}());
var Carros = /** @class */ (function (_super) {
    __extends(Carros, _super);
    function Carros(precio, marcaP, modeloP) {
        var _this = _super.call(this, precio) || this;
        _this.marca = marcaP;
        _this.modelo = modeloP;
        return _this;
    }
    return Carros;
}(Producto));
