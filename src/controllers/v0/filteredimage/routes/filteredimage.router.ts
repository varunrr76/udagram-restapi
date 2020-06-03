import { Router, Request, Response } from 'express';
import { filterImageFromURL, deleteLocalFiles } from '../util/util';
import { requireAuth } from '../../users/routes/auth.router';

const router: Router = Router();

// GET /filteredimage?image_url={{URL}}
router.get('', requireAuth, async (req: Request, res: Response) => {
  const image_url = req.query.image_url;

  // validate the image_url query
  // credit: https://stackoverflow.com/questions/9714525/javascript-image-url-verify
  if (image_url.match(/\.(jpeg|jpg|png)$/) == null) {
    res.status(422).send('Please provide valid image');
  }

  // call filterImageFromURL(image_url) to filter the image
  filterImageFromURL(image_url)
    .then((filtered_image) => {
      // send the resulting file in the response
      res.status(200).sendFile(filtered_image, {}, (err) => {
        if (err) {
          res.status(500).send('Failed to send file retry');
        } else {
          // deletes any files on the server on finish of the response
          deleteLocalFiles(filtered_image);
        }
      });
    })
    .catch((err) => {
      // return 404 error if no image found at url
      res.status(404).send(err);
    });
});

export const FilteredImageRouter: Router = router;
