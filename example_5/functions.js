module.exports = {
    somme : (a = 0, b = 0) => {
        return a + b;
    },


    produit : (a = 0, b = 1) => {
        return a * b;
    },


    soustraction : (a = 0, b = 0) => {
        return a - b;
    },


    division : (a = 0, b = 1) => {
        //TODO manage exception if b is 0
        return a / b;
    }

}