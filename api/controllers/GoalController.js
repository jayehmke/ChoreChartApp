/**
 * GoalController
 *
 * @description :: Server-side logic for managing Goals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  list: function (req, res) {

    Goal.find()
      .where('owner', req.current_user.id)
      .then(function (goals) {
        return ResponseService.json(200, res, "Goals fetched successfully", goals)
      })

  },

  get: function (req, res) {

  },

  store: function (req, res) {

    Goal.create({
      name: req.param('name')
    })
      .then(function (err, goal) {
        if (err) { return res.serverError(err); }

        sails.log.info('Finn\'s id is:', goal);
        return ResponseService.json(200, res, "Success", goal)
      })
      .catch(function (error) {
          if (error.invalidAttributes) {
            return ResponseService.json(422, res, "Validation Errors", { validationErrors: error.Errors })
          }
        }
      )

  },

  destroy: function (req, res) {

  }

};

