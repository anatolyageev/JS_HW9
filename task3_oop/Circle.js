class Circle {
    _radius;

    set _radius(value) {
        this._radius = value;
    }

    get _radius() {
        return this._radius;
    }

    get diametr() {
        return this._radius * 2;
    }

    squreCircle() {
        return Math.PI * Math.pow(this._radius,2);
    }

    perimetrCircle() {
        return 2 * this._radius * Math.PI;
    }
}