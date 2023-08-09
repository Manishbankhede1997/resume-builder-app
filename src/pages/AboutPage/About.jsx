import React from "react";
import "./About.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function About() {
  return (
    <>
      <div className="aboutbox">
        <h1 className="heading">Resume Builder</h1>
        <div className="box-bg">
          <div className="para">
            The Resume Builder app is a user-friendly platform designed to cater
            to the needs of individuals seeking a simple yet effective tool to
            craft their professional resumes. With a focus on simplicity and
            functionality, this app empowers users to effortlessly create and
            customize their resumes in just a few clicks. The app offers a clean
            and intuitive interface that guides users through the resume
            creation process step by step. Users can input their personal
            information, work experience, education details, skills, and
            achievements using easily accessible forms. The Resume Builder app
            ensures that users can showcase their unique qualifications and
            accomplishments in a clear and organized manner. One of the standout
            features of this app is its seamless download functionality. Once
            users have completed their resume, they can generate a polished and
            well-formatted PDF version of their document with a single click.
          </div>

          <div className="box">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBUQEBAQDxAPEA8PEA8QEA8QEBAPFhUWFhURFRUYHiogGBolHhUWITEhJSkrLi4vFx8zODM4NygtLysBCgoKDg0OGxAQGy0lICU4LTcrNTU2Mjc3Mi01NTUvLS8tKy4rLTU1Ly8vLTUtLi01Ky8tNS8tMDctLTUuLS4tNf/AABEIAOEA4AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADoQAAICAQEFBgMGBgEFAQAAAAECAAMRBAUSITFBBhMiUXGBMmGRQnKhscHRFDNSgpLh8AcVI2KiFv/EABoBAQACAwEAAAAAAAAAAAAAAAABAwIEBQb/xAAmEQEAAgIBAgUFAQAAAAAAAAAAAQIDEQQhMQUSQWHBE1GRsfAi/9oADAMBAAIRAxEAPwD7jERAREQEREBERAREQEREBERAREoNp666uwje3R9kYGCvQwL+Jyn/AHu8faB/tWe17QXDoh9j+8DqInNr2jfrWp9CRNq9pB1qPs3+oF/Ep07RVdVcewP6zau3dOftEeqt+kCziadPq67PgdW+QPEe3OboCIiAiIgIiICIiAiIgIiICIiAiIgIiICc92juBdUwMqMk9ePT/nnL+1wqljyUEn0E4rUXl3LnmxJ/1AxuCY7oTGYzAd185g1H5T1vRvQNZrP/ADE8lD5Gbt6N6BqrZlIZSVI5EcDOy2Vq+9qDH4vhb7w6zkt+dVsOorSM/ay3oDygT4iICIiAiIgIiICIiAiIgIiICIiAiIgVHaPU7qCsc34n7o/3OakvaWp721m6cl+6OX7+8iwExMxiBiIiAmMxEDbpaTY6oObED0HUzt1UAADkAAPSc72Z0+Xaw/ZG6PU8/wAPznRwEREBERAREQEREBERARE123KgyzBfUgQNkSAm16S4QE8eAbGFz5SfAREQEgba1G5UQOb+EenWT5zO3L9+3HRPCPXr/wA+UCsxMT0RMYgYiZmIGDERAwRMT1JWzNP3lqr0zlvujiYHS7J0/d1KOpG83qZMiICIiAiIgIiICDPFxIUleLBTgfPHCcVfq7H+N2PyJ4fSB1t+0qU5uM+Q8R/CV9/aBfsIT82OPwnOgzIgWV+2Ln+1ujyUY/HnILuTxJJPmeM8TMDE6LYm1N7FbnxD4WP2h5H5znoEDuolVsbafeDcc+Mcj/UP3lrA0azUCtCx6ch5npOSsbJJ6k5Jlpt/U5YIOSc/vGVWYHmYM9TGIHmJnEbpgeYmcRA8y/7NabAaw9fCvp1/T6SiRSSAOJJAA+c7TS0itFQfZGPU9TA2xEQEREBERAREQE5TtBou7s31Hhs4+jdR+s6uR9fpRbWUPXkfJhyMDiAZ6iysqxUjBU4I+cCB6EzPOJ6gInhrVHWeO+J+FfcwJFeQQQcEcQR0l1/+kqRMWugsGAcnhyOGOPT8ZzLWVkMllyKSCCA6hgfTznPXaTfcHeLJw31dwS4GMAFFXd/3Jml5rM1TS+KLRGSZ17Omv25psktbxJJJUbxJ+WRK63tRQr8A7pu893Db2fpjEkrszSLwGnrP32vs/NsTXqKKUXKUULxHEUVHH+WZx6c62S8UrMdfafl0ptwKRvVp/Hwg29sahwWon1dRNuh7TNY2DSEXdYhyWxvdMtggT3/GlRwbdA57oRMf4ib9LqSxKsWbeX7TOeAPr85vcjHmw45yWtvXpprzzeHaJrTFqZ9Zmf0pv+9a1yRWpsAJG/XWWQ46hsYlVrdt6lW3XexXH2Qp/SdYt9KoHULuFgoIXqW3cY9Zo1eBYeA+FTyA8/2mhw8tuTl8lpmO/qvt4njx13XFVP2ULb0Ww3oikfDmtrD55UDC/UyfcmP3nJ06jvFzwGQpwrFsZHI8BOj0Z/8ABX939TO5ekV7ORjyTaeq57P6bes3zyrGf7jy/WdLIWyNN3dQB5t4m9T0kg25+EZ+fQSta2MwHE8JrVy3IYX+o8z6D9YWnqx3j+A9BNsBERAREQEREBERAoO0ui5WqOPwvjy6N+n0nPtYBzIE7y9QVIIyCDkGcxqdgUvxBZD8jkfQwKKzXDoPrNB1RPM4EsNT2atHwOr/ACPhP7SufQ218LK2UHhnmufUcIIWej0e9x85Jtto0/8AMcZ/oHic+wlFrdTZXUvduyKxKsBw49OPMdZzx1Z7zdJHxMDkcxu5HiPNuI4es1MnIms6iHW4/h9bxFrT0b+0yhdQ9led25E1CdDgrxHyOVYT1p7fDjP/ANFvxMnV6VNVQp7zcegvUeAbKE769fNmmgbJoTgbW/tCL+k6GLPWaRMuRyuPauW1Y9JTdRcGRWyvRt1gSjZHIj9ek9X6jeqyQVJVWweY5HBjT10AAbzkDzb9hJIGnx8APqSZ52vh+WuSLRMaien9pMxuHOX3HDqBnvMkNlcDKgcevMZk3R6sd4PQj8v2lsn8OOVVf+IMkJq0HJVHoAJ3uTaM2K2P7temCYmJmVD/AA7kbo5bpOArHFuN0N6Y/GbtZTczZWpzlQPhI5E+frL1NaTwHH0m9Q7Tm8Xh/QyRk825ja69ItGpcjTs7UqMbpwAAN9qxgD0nVbMps7utMDK4yTxXOc4khNMBxPE/hJlLeJR8x+c6dsk27orjinZfpSfttvHyHBfpNwERMWZERAREQEREBERAREQPNnI+hlZmWb8j6GVcD0J5tqV1KMMhhg/vMzIgcD2iQ1B6m6EMvz65HrxnKd27nou8R/7Mx6YXzn2e2pXGHVWHkwBH4yBRsLSpYLkpRbBnBGcDPULyz85TbBW07luY+blx08lXG6fslrUqzWU3nwzI7kPnoOWPac/tTZ2vq42ae3H9SjfX6rmfY4zLYrERqGra82ncviFG0GHA5B8jzlhVr/nPqms2bRd/Nprs+bIpP1lJrOx+iHjWtkPkHYr9CY0x25bRs9hwilj8unqek6DSbHbnYfYcvr+0t6a0QYRQoHDgBPW9Ghqq0qqMYH6TcTPJMxmToZzPdB8a/eX85rm3Tjxr95fzgdPERAREQEREBERAREQEREDDcj6SsxLMyuMDziJmIGJiZmIAzGZmYgMzRrT4D7TdNGs+D6QK8T1MCehAARiJr1FpUDABLOigHhwJ8R9l3j7QNwWb9KPGv3l/OQNEhV7FyWUOGGeO6WGSufLPH+6WGlHjX7y/nA6GIiAiIgIiICIiAiIgIiIAysMs5WGBxHbPampp1ta026itBodTqGWimvULvo6BWsrbiU8RB3fFxHTM97H7bW23LS+lrLGnR2P3Wpp71TdWrswqcjfRSTxViflOvehGO8UUtusm8QN4I2N5QeeDgcPkJzI7GJVYr6WxUVRph3Goor1NYFIC1sjNh0cKODb3tL62pNdWhHVa7J7R6TV57i4NugHDK9RKE7quocDeQngGGQTLWfLtp9mtdWlgGnD111CxmrdLFd01NNx/hav5lRda2LVDw7wG7xjbva68ai2/QXNbQuq0alN0lWRNNqLtRSquPC5CLkDBziZfQi0/wCJNvqETiKv+olZuvQaey2mq/TUUWUkM+oNrPXlVbAwHrYc+M67ZutS+sWILFBJBW2qymxWHMMjgESm2O1e8G0mR9Z8PuJJkfWfD7zBKvmQJnE9CBTN2o2eDg63SgjOR39ec/WaNR2j0dhTudZpHsW1dys3DFjMrJ3eVBIJ3jjgeInx3Z3ZUWvbbqnOnpW9h4mSt3Tcssyu/wAOIVcE8Dkzu+yduipqpvOnalRl9IrKck2Ix7y5zwXxLeqMx4rx8pvZONjrHSZljEy67V3kUsxc1byi+9wSDWWAFaZHLAAyfJP/AGl1sXUd6KrMgizdcFQwUqT4SM8cEYnLaTTGwBrKjp67N4LpfC2+petwyhehAwWbBHAAATq9j1le7UqqbpAVF4hUHBV9gBNO1dMnSxETEIiICIiAiIgIiICIiAla3OWUr2EDxBMziUnbaln2bq0RWd20t6qigszMUOAAOJMmsbnQgdotfrtPqhZUjWaVaq2tUJvAhV1LW7uBkOAKiB1wB1m9Ns6e6zSUXVq12ooXVrwUpVY9TY5nILL3wB8lOec4vY229RXa2k0l9J763QVo2b9RRpO8W7vCVtbeRya1XuicAkEczOhO2KUsP8fTStul1VdN2urArSthX3unuOfEqMGZCMnBO7xDTZtj100x29bU/wCn9DVhNMVqCDSBarVNtDLRZbYFYAhjvG1snM6Hs9pbKaBXYi1srP4Uvt1CbpJIIewbwHH4Ty5STs7WpqKkvr3jXaodCyMjFTyO6wBEkym2S0xqydMSPrfh95ImjWfD7iVpVGs19VKlrbFQBSxzxbdHUKOJ9pRJrdVrX7tEFNC2WJa4be3xXqGQ1lh8DFKwcDPCwdOItddshb7ksc+GtLEKf1FiOZ8sbw95YM6VKWYqiIMkkgKB5kyyJiI6d0Pi3Z/Yl+1te1d7MdHobGrbkAUSxzXTw5nxMM8wvtPrFuiQ3b9Y3mWpK1Bx/D1hS65wB8WLGGPL3mnZOzgiGugGmlrbLXcjFt7OSzPnoMkewEuaqlQBVGFUAAfKW5s3mn2Ihr0+mCnJO+5yDYR4sE5wPIZ6Sfo/5i+sjyToh/5F9ZrJXkREBERAREQEREBERAREQEguOJ9ZOkJ+Z9TA8TBnqYIgQ9obPq1FbVWoHSzG8OIOQcqwYcQwIBBByCOE5rX9gNPbUaO+1C022NdqQ1r226mwJu1F7WO9hMAheRwJ2ExM65LV7SaQ9krctFa6jcNyoFsavO4zDhvjhwzjOOmcSXMxMZnYxI+sHh9xJE0a34fcSBU6vWLUBnJZuCIoyznyH1E1LomsYPfutjBSoZ3UOBknj4jnPSTQoznHEAgHrx5z3J3rsGJmMT0JAbsk6H+YPf8AKaKkLHCjJlppNFuHeJy3y5CBMiIgIiICIiAiIgIiICIiAkd6j6yRECERPJk4qDzmpqB04QI0xibGqI6TxiB5iesTEDzI+tHh9xJUj6z4fcQIQE9YgCZgJv02lZ/kvVv2knS7P6v/AI/vLEDHAcBA8UUKgwo9T1M2REBERAREQEREBERAREQEREBERAREQE8tWD0nqIGhqPKaWQjpJsQIOJG1g4D1lm1IPymizSb2MngPrArKqWc4Uep6CWul0apx5t5+XpN9dYUYAwJ6gIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB/9k="
              alt=""
            />
          </div>
        </div>
        <div className="shareoption">
          <a href="https://www.linkedin.com/in/manish-bankhede-88604b263/">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://www.https://www.facebook.com/profile.php?id=100005355737211.com/the_bankhede/">
            <FacebookIcon fontSize="large" />
          </a>
          <a href="https://www.instagram.com/the_bankhede/">
            <InstagramIcon fontSize="large" />
          </a>
          <a href="https://twitter.com/login">
            <TwitterIcon fontSize="large" />
          </a>
          <a href="/">
            <WhatsAppIcon fontSize="large" />
          </a>
        </div>
      </div>
      <div className="footer">
        <p>Created-By@ManishBankhede</p>
      </div>
    </>
  );
}

export default About;
