/**
 * Created by Abdullah-Mac on 3/15/15.
 */



router.route('/nutrition')

    // ===========POST INFORMATION====================== //
    .post(function (request, response) {
        var macro = new Nutrition();
        macro.date = request.body.date;
        macro.protein = request.body.protein;
        macro.carbohydrate = request.body.carbohydrate;
        macro.fat = request.body.fat;

        macro.save(function (err) {
            if (err) {
                response.send(err);
            }
            response.json({ message: "Information sent!"});

        });

    })

    // ===========ACCESS INFORMATION====================== //
    .get(function (request, response) {
        Nutrition.find(function (err, nutritionInformation) {
            if (err) {
                response.send(err);
            }

            response.json(nutritionInformation);

        });
    });

// =========NEW ROUTE TO ACCESS INDIVIDUAL ITEMS======================== //

router.route('/nutrition/:_id')

    // ===========ACCESS INFORMATION====================== //
    .get(function (request, response) {
        Nutrition.findById(request.params._id, function (err, macro) {
            if (err) {
                response.send(err);
            }
            response.json(macro);

        });
    })

    // ==============DELETE INFORMATION=================== //
    .delete(function (request, response) {
        Nutrition.remove({_id: request.params._id},
            function (err, macro) {
                if (err) {
                    response.send(err);
                }
                response.json({message: "Successfully deleted"});

            });
    });
