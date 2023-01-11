import multer from "multer";

export const localsMiddleware = (req, res, next) => {
    console.log(req.session);
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName="Wetube";
    res.locals.loggedInUser = req.session.user;
    next();
}

export const avatarUpload = multer({ dest: "uploads/avatars/"});
export const videoUpload =  multer({ dest: "uploads/videos/"});