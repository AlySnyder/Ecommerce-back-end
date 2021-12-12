const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  Tag.findAll()
    .then((tags) => {
      res.status(200).json(tags);
    }).catch((err) => {
      res.status(500).json(err);
    })

});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({

  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({

  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((whatever) => {
    console.log(whatever)
    res.status(200).json({})
  });
});

module.exports = router;
