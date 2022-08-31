import { writeClient, readClient } from "../../lib/sanityClient";
import bcrypt from "bcrypt";

export default async function registerRouter(req, res) {
  if (req.method === "POST") {
    const newStudent = req.body;
   const query = `*[_type=='students' && emailOfStudent=='${newStudent.studentEmail}']`;
    const checkIfUserExists = await readClient.fetch(query);
    if (checkIfUserExists.length != 0) {
      return res.send(JSON.stringify("bad"));
    }
    
    try {
      const hashedPassword = await bcrypt.hash(newStudent.studentPassword1, 10);
      const newStudentDoc = {
        _type: "students",
        nameOfStudent: newStudent.studentName,
        emailOfStudent: newStudent.studentEmail,
        hashedPassword: hashedPassword,
      };

      await writeClient.create(newStudentDoc)
        
      // eslint-disable-next-line react-hooks/rules-of-hooks
      
      res.send(JSON.stringify("good"))
    } catch (err) {
      res.status(500).send('Internal Server Error.');
    }
  }
}
