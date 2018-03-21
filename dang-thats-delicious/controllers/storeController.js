const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    console.log(`Hello ${req.name}`);
    res.render('index');
};

exports.addStore = (req, res) => {
    res.render('editStore',{title: 'add Store'});
};

exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save();
    await store.save();
    req.flash('success', `Successfully created a store ${res.store}. Would you care to leave a review`);
    res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) => {
    // query the database for all stores.
    const stores = await Store.find();
   console.log(stores);
  // if (stores.length > 0)
    res.render('stores', {title: 'Stores', stores});
   // else res.send('no stores found');
};

exports.editStore = async (req, res) => {
    const store = await Store.findOne({_id : req.params.id});
    //res.send('Found the edit store route');
   // res.json(store);
   //res.render('editStore');
   //console.log(store);
   //res.render('dumpStore', {title: `${store.name}`, store});
   res.render('editStore', {title: ` Edit ${store.name}`, store});
};

exports.updateStore = async (req, res) => {
   const store = await Store.findOneAndUpdate({_id: req.params.id }, req.body, {
       new: true, 
       runValidators: true
   }).exec();
   req.flash('success', `Successfully updated <strong>${store.name}</strong>.
   <a href="/stores/${store.slug}"> View Store-</a>`);
   res.redirect(`/stores/${store._id}/edit`);
}
