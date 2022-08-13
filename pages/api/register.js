import { writeClient } from "../../lib/sanityClient";
import { useRouter } from "next/router";
import bcrypt from "bcrypt";

export default async function registerRouter(req, res) {
  if (req.method === "POST") {
    const newStudent = req.body;
    if (!newStudent.studentName || !newStudent.studentEmail) {
      res.send("Give us your name and email");
    }
    if (newStudent.studentPassword1 != newStudent.studentPassword2) {
      res.send("Passwords didnt match!");
    }
    try {
      const hashedPassword = await bcrypt.hash(newStudent.studentPassword1, 10);
      const newStudentDoc = {
        _type: "students",
        nameOfStudent: newStudent.studentName,
        emailOfStudent: newStudent.studentEmail,
        hashedPassword: hashedPassword,
      };

      await writeClient.create(newStudentDoc).then((res) => {
        console.log(
          `New Student was added, document ID is ${res._id} and studentName is ${res.nameOfStudent}`
        );
      });
      // eslint-disable-next-line react-hooks/rules-of-hooks
      res.redirect("/login");
    } catch (err) {
      console.log(err);
    }
  }
}
