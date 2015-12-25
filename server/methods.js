Meteor.methods({
    "modules/favourite": function (userId, moduleId) {
        check(userId, String);
        check(moduleId, String);
        var module = Modules.findOne(moduleId);
        var Favorite = module.favorite;
        var FavCount = module.favcount;
        if (userId != null) {
            if (function (searchString, array) {
                for (i = 0; i < array.length; i++) {
                    if (searchString == array[i]) return true;
                }
                return false;
            } (userId, module.favorite)) {
                for (var i = Favorite.length - 1; i > -1; i--) {
                    if (Favorite[i] == userId) {
                        Favorite.splice(i, 1);
                        FavCount -= 1;
                    }
                }
            } else {
                Favorite.push(userId);
                FavCount += 1;
            }
            Modules.update(module._id, {
                $set: {
                    favorite: Favorite,
                    favcount: FavCount
                }
            });
        } else {
            ReactionCore.Log.info("Please login");
        }
        return Modules.findOne(module._id).favcount;
    },
});