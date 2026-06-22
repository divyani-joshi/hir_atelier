    const connectDB =
    require("../../db/dbconnnect");

    const { ObjectId } =
    require("mongodb");

    let Booking = async (req, res) => {

        try {

            let db =
            await connectDB();

            let servicecollection =
            db.collection("services");

            let {
                name,
                email,
                mobile_no,
                city,
                service_title,
                booking_date,
                booking_time,
                number_of_people,
                notes
            } = req.body;

            if (
                !service_title 
            ) {

                return res.status(400).send({
                    success: false,
                    message:
                    "All fields are required"
                });

            }

            // Find service
            let service =
            await servicecollection.findOne({

                title: service_title,
                status: "Active"

            });
            let image =req.file ? req.file.path : "";

            if (!service) {

                return res.status(404).send({

                    success: false,

                    message:
                    "Service not found"

                });

            }

            // Booking collection
            let collection =
            db.collection("bookings");

            // Insert booking
            let bookservice =
            await collection.insertOne({

                user_id: req.user.id,

                service_id: service._id,

                service_title:
                service.title,

                category_id:
                service.category_id,
                name,
                email,
                city,
                mobile_no,
                inspiration_image: image,
                booking_date,

                booking_time,

                number_of_people,

                total_amount:
                service.price,
                notes,

                booking_status:
                "Pending",

                payment_status:
                "Pending",

                created_at:
                new Date(),

                updated_at:
                new Date()

            });

            return res.status(201).send({

                success: true,

                message:
                "Service booked successfully",

                booking_id:
                bookservice.insertedId

            });

        } catch (e) {

            console.log(e);

            return res.status(500).send({

                success: false,

                message:
                "Internal server error"

            });

        }

    };

    module.exports = { Booking };