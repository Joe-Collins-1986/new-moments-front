import { rest } from "msw";

const baseURL = "https://moments-photos.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
      return res(
        ctx.json({
            "pk": 1,
            "username": "joe",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 1,
            "profile_image": "https://res.cloudinary.com/dfgsg567s/image/upload/v1/media/../default_profile_odk5vv.jpeg"
            })
      );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
      return res(ctx.status(200));
    }),
  ];