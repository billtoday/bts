"use strict";
var Invoice = (function () {
    function Invoice() {
    }
    ;
    Object.defineProperty(Invoice.prototype, "pdf", {
        get: function () {
            return invoicePdf(this);
        },
        enumerable: true,
        configurable: true
    });
    return Invoice;
}());
exports.Invoice = Invoice;
;
var invoicePdf = function (invoiceArg) {
    return undefined;
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ0cy5jbGFzc2VzLmludm9pY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBO0lBT0k7SUFFQSxDQUFDOztJQUNELHNCQUFJLHdCQUFHO2FBQVA7WUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBQ0wsY0FBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksZUFBTyxVQWFuQixDQUFBO0FBQUEsQ0FBQztBQUVGLElBQUksVUFBVSxHQUFHLFVBQVMsVUFBa0I7SUFDeEMsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNyQixDQUFDLENBQUEiLCJmaWxlIjoiYnRzLmNsYXNzZXMuaW52b2ljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSBcIi4vYnRzLnBsdWdpbnNcIjtcbmltcG9ydCAqIGFzIGNsYXNzZXMgZnJvbSBcIi4vYnRzLmNsYXNzZXNcIjtcblxuZXhwb3J0IGNsYXNzIEludm9pY2Uge1xuICAgIGlkOm51bWJlcjtcbiAgICBwYXltZW50OmNsYXNzZXMucGF5bWVudDtcbiAgICBidXllcjpjbGFzc2VzLmNvbnRhY3Q7XG4gICAgc2VsbGVyOmNsYXNzZXMuY29udGFjdDtcbiAgICB2YXRJZDpzdHJpbmc7XG4gICAgZGF0ZTpEYXRlO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFxuICAgIH07XG4gICAgZ2V0IHBkZigpe1xuICAgICAgICByZXR1cm4gaW52b2ljZVBkZih0aGlzKTtcbiAgICB9XG59O1xuXG5sZXQgaW52b2ljZVBkZiA9IGZ1bmN0aW9uKGludm9pY2VBcmc6SW52b2ljZSl7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iXX0=
