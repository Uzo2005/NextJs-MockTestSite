export const sessionOptions = {
    cookieName: process.env.COOKIE_NAME,
    cookieOptions: {
      secure: false //process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.COOKIE_SECRET
}

