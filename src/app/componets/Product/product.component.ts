import { Component } from "@angular/core";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
    product = [
        { _id: 1, name: "vu dinh quan", price: 1000, img: "quan" },
        { _id: 2, name: "vu dinh quan1", price: 10001, img: "quan" },
        { _id: 3, name: "vu dinh quan2", price: 10002, img: "quan" }
    ];
    status = false;
    toggle() {
        this.status = !this.status;
    };
    InputValue = ''
    Inputvalue(e: any) {
        this.InputValue = e.target.value;
    };
    remove(id: any) {
        this.product = this.product.filter((p) => p._id !== id)
        console.log("32")
    }
}

