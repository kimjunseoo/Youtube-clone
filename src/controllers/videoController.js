import Video from "../models/Video";

const handleSearch = (error, videos) => {
    console.log("errors", error);
    console.log("videos", videos)
}

export const home = async (req, res) => {
    const videos = await Video.find({}).sort({ createdAt:"desc"});
    return res.render("home", {pageTitle: "Home", videos });
};

export const watch = async (req, res) => {
    const id = req.params.id;
    const video = await Video.findById(id);
    if(!video){
        return res.status(404).render("404", {pageTitle:"Video Not Found"});
    }
    return res.render("watch", { pageTitle: `Watching`, video});
};

export const getEdit = async (req, res) => {
    const id = req.params.id;
    const video = await Video.findById(id);
    if(!video) {
        return res.render("404", {pageTitle:"Video Not Found"});
    }
    return res.render("edit", { pageTitle: `Editing`, video });
};

export const deleteVideo = async (req, res) => {
    const { id } = req.params;
    await Video.findByIdAndDelete(id);
    //delete video
    return res.redirect("/");
};

export const postEdit = async (req, res) => {
    const id = req.params.id;
    const { title, description, hashtags } = req.body;
    const video = await Video.exists({_id: id});
    if(!video) {
        return res.render("404", {pageTitle:"Video Not Found"});
    }
    await Video.findByIdAndUpdate(id, {
        title, 
        description, 
        hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
    const { path: fileUrl } = req.file; //req.file is gived by multer
    const title = req.body.title;
    const description = req.body.description;
    const hashtags = req.body.hashtags;
    try {
        await Video.create({
            title: title,
            description: description,
            fileUrl,
            hashtags: Video.formatHashtags(hashtags),
        });
        return res.redirect("/");
    } catch(error) {
        res.render("upload", { pageTitle: "Upload Video", errorMessage: error });
    }
};

export const search = async (req, res) => {
    const { keyword } = req.query;
    let videos = [];
    if ( keyword ) {
        videos = await Video.find({
            title: {
                $regex: new RegExp(`${keyword}$`, "i"),
            },
        })
        return res.render("Search", {pageTitle: "Search", videos})
    }
    return res.render("Search", {pageTitle: "Search", videos})
}
  