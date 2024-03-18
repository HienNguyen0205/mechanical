var nodemailer = require('nodemailer')

const controller = {
    cvReceiver: async (req, res) => {

        if(req.method !== 'POST'){
            res.status(200).json({
                code: 1,
                message: 'Only POST requests are allowed'
            })
        }

        const { name, email, tel, address, cv, position } = req.body

        if (name == '' || email == '' || tel == '' || cv == '' || position == '') {
            res.status(200).json({
                code: 2,
                message: 'Missing data',
            })
            return
        }

        const { filename, path, mimetype } = req.file

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "shinzenmechanical.info@gmail.com",
                pass: "hsykjecdhrwpwqux",
            },
        });

        const mailOptions = {
            from: 'shinzenmechanical.info@gmail.com',
            to: 'shinzenmechanical.info@gmail.com',
            subject: `${name} - ${position}`,
            html: `<p>Họ tên: ${name}</p><br><p>Email: ${email}</p><br><p>Sđt: ${tel}</p><br><p>Địa chỉ: ${address}</p><br><p>Vị Trí ứng tuyển: ${position}</p>`,
            attachments: [{
                filename: filename,
                path: path
            }]
        };

        try {
            transporter.sendMail(mailOptions, err => {
                if(err){
                    res.status(200).json({
                        code: 3,
                        message: err.message,
                    })
                }else{
                    res.status(200).json({
                        code: 0,
                        message: 'Gửi thông tin thành công!',
                    })
                }
            })
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = controller