let Utils = {

    getIdFromUrl(url = '') {
        let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
        let match = url.match(regExp);
        let result = '';

        if (match && match[2].length === 11) {
            result = match[2];
        }

        return result;
    },

    dummyEvent() {
        console.log.apply(console, arguments);
    }

}

export default Utils;
