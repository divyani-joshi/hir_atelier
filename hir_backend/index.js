require("dotenv").config();
const express = require("express")
const cors = require("cors")
const path = require("path");
const app = express();
const PORT = 8000;
const connectDB = require("./db/dbconnnect");
const { Signup } = require("./apis/common/signup");
const { Login } = require("./apis/common/login");
const { GetCategories } = require("./apis/user/GetCategories");
const { GetServices } = require("./apis/user/GetServices");
const { GetSingleCategory } = require("./apis/user/GetSingleCategory");
const { GetPortfolio } = require("./apis/user/GetPortfolio");
const { GetSeinglePortfolio } = require("./apis/user/GetSinglePortfolio");
const { GetFeedbacks } = require("./apis/user/GetFeedbacks");
const { GetProducts } = require("./apis/user/GetProducts");
const { GetBlogs } = require("./apis/user/GetBlogs");
const { CustomOrder } = require("./apis/user/PlaceCustomOrder");
const AuthMiddleWare = require("./Auth/auth");
const { GetSingleService } = require("./apis/user/GetSingleService");
const { GetSingleProduct } = require("./apis/user/GetSingleProduct");
const { GetProfile } = require("./apis/user/GetProfile");
const upload = require("./multer/upload");
const { Booking } = require("./apis/user/Booking");
const { GetUser } = require("./apis/admin/GetUsers");
const { GetOrder } = require("./apis/admin/GetOrders");
const { GetBooking } = require("./apis/admin/GetBookings");
const { AddCategory } = require("./apis/admin/AddCategory");
const { AddBlog } = require("./apis/admin/AddBlogs");
const { AddService } = require("./apis/admin/AddService");
const { addGallery, AddGallery } = require("./apis/admin/AddGallery");
const { GetGallery } = require("./apis/user/GetGallery");
const { AdminLogin } = require("./apis/admin/AdminLogin");
const { ContactUs } = require("./apis/user/Contact");
const { GenerateOrder } = require("./apis/user/GenerateOrder");
const { VerifyPayment } = require("./apis/user/VerifyPayment");
const { UpdateGallery } = require("./apis/admin/UpdateGallery");


app.use(express.json());
app.use(cors({
  origin: true [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5173",
    "http://localhost:5174",
    "https://hir-atelier.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use("/uploads", express.static("uploads"));
connectDB();

app.get("/", (req,res) => {
    res.send("welcom to the HiR_Atelier platform API")
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/user/signup", Signup)
app.post("/user/login", Login)

app.get("/user/getcategories", GetCategories)
app.get("/user/getservices" , GetServices)
app.get("/user/getservices/:category_id", GetServices)
app.get("/user/getsingleservice/:slug" , GetSingleService)
app.get("/user/getcategory/:slug", GetSingleCategory)
app.get("/user/getportfolio" , GetPortfolio)
app.get("/user/getsingleportfolio/:id", GetSeinglePortfolio)
app.get("/user/getfeedbacks" , GetFeedbacks)
app.get("/user/getproducts" , GetProducts)
app.get("/user/getsingleproduct/:slug" ,GetSingleProduct)
app.get("/user/getblogs" , GetBlogs)
app.post("/user/customOrder"  , upload.single("inspiration_image") ,AuthMiddleWare, CustomOrder )
app.get("/user/profile" ,AuthMiddleWare, GetProfile)
app.post("/user/booking" ,upload.single("inspiration_image"), AuthMiddleWare, Booking)
app.get("/user/getgallery/:service", GetGallery)
app.post("/user/contact", AuthMiddleWare,ContactUs)
app.post("/generate-order", AuthMiddleWare, GenerateOrder)
app.post("/verify-payment", AuthMiddleWare, VerifyPayment)

app.get("/admin/getusers",AuthMiddleWare,  GetUser)
app.get("/admin/getorders", AuthMiddleWare, GetOrder)
app.get("/admin/getbooking", AuthMiddleWare, GetBooking)
app.post("/admin/addcategory", upload.single("image"), AuthMiddleWare,AddCategory)
app.post("/admin/addblog", upload.single("image"), AuthMiddleWare, AddBlog)
app.post("/admin/addservice", upload.single("image"), AuthMiddleWare, AddService)
app.post("/admin/addGallery", upload.array("images",10), AddGallery)
app.put("/admin/updategallery/:id", upload.array("images",10), UpdateGallery)
app.post("/admin/login", AdminLogin)

app.listen(PORT, ()=>{
    console.log(`HiR_Atelier server started on PORT ${PORT}`);
    
});