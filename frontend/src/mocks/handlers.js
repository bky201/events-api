import { rest } from "msw";

const baseURL = "https://myeventapi-91834762378b.herokuapp.com/";


const handlers = [
  // mocks a request to get the logged in user
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => res(
    ctx.json({
        pk: 5,
        username: "eventsuser1",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 5,
        profile_image: "https://res.cloudinary.com/hasgasadgse/image/upload/v1/default_profile_bxensm"
        }),
  )),
  // mocks a request to log a user out
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => res(ctx.status(200))),
];
export default handlers;
