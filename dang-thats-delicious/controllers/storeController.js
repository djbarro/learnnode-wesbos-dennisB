const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    console.log(`Hello ${req.name}`);
    res.render('index');
};

exports.addStore = (req, res) => {
    res.render('editStore',{title: 'add Store'});
}

exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save();
    await store.save();
    req.flash('success', `Successfully created a store ${res.store}. Would you care to leave a review`);
    res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) => {
    // query the database for all stores.
    const stores = await Store.find();
   // console.log(stores);
    res.render('stores', {title: 'Stores', stores: stores});
}