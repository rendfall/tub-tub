class AbstractElement {
    gui = null;
    $element = null;

    constructor(options) {
        this.gui = options.gui;
    }

    render($target = this.gui.$container, replace = false) {
        if (replace) {
            $target.html(this.$element);
        } else {
            $target.append(this.$element);
        }
    }

    destroy() {
        this.$element.empty();
    }

    getElement() {
        return this.$element;
    }

    static createElement(nodeName = 'div', attrs = {}) {
        let $element = $(`<${nodeName}>`, attrs);

        return $element;
    }
}

export default AbstractElement;
