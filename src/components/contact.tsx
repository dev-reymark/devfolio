"use client";
import React, { useRef, useState } from "react";
import {
  Button,
  Checkbox,
  Image,
  Input,
  Link,
  Textarea,
} from "@nextui-org/react";
import { FaViber } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Swal from "sweetalert2";
import { BsTextareaResize } from "react-icons/bs";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { data } from "@/data/resume";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const validateInput = (
    value: string,
    setter: (value: string) => void,
    setError: (error: string) => void
  ) => {
    setter(value);
    const errorMessage = value.trim() ? "" : "This field is required";
    setError(errorMessage);
    return errorMessage;
  };

  const validatePhone = (value: string) => /^(\+|\d|$)[\d\s+()-]*$/.test(value);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const handleSubmit = async (event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();

    // Validation checks
    const isNameValid = validateInput(name, setName, setNameError) === "";
    const isPhoneValid = validatePhone(phone);
    const isEmailValid = validateEmail(email);
    const isSubjectValid =
      validateInput(subject, setSubject, setSubjectError) === "";
    const isMessageValid =
      validateInput(message, setMessage, setMessageError) === "";

    if (
      !isNameValid ||
      !isPhoneValid ||
      !isEmailValid ||
      !isSubjectValid ||
      !isMessageValid
    ) {
      if (!isPhoneValid) {
        setPhoneError(
          "Only digits, plus sign (+), hyphen (-), parentheses (), and whitespace are allowed."
        );
      }
      if (!isEmailValid) {
        setEmailError("Please enter a valid email");
      }
      return;
    }

    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      setIsLoading(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (response.ok) {
        Swal.fire(
          "Thank you!",
          "Your message has been received. We'll get back to you shortly.",
          "success"
        );

        if (formRef.current) {
          formRef.current.reset();
          setName("");
          setPhone("");
          setEmail("");
          setSubject("");
          setMessage("");
          setAgreed(false);
        }
      } else {
        Swal.fire(
          "Error!",
          "An error occurred during form submission. Please try again later.",
          "error"
        );
      }
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Error!",
        "An error occurred. Please check your internet connection and try again.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="px-2 py-4 lg:py-14">
        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          <div className="hidden md:block">
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              Let&apos;s build something great.
            </p>

            <div className="mt-4 md:mb-12 max-w-2xl">
              <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
                Adipisicing anim proident cillum.
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Occaecat dolor amet sint veniam nulla Lorem dolore pariatur
                laboris.
              </p>
            </div>

            <blockquote className="hidden md:block relative max-w-sm">
              <svg
                className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-gray-800"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                />
              </svg>

              <div className="relative z-10">
                <p className="text-xl italic text-gray-800 dark:text-white">
                  {data.quote}
                </p>
              </div>

              <footer className="mt-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="size-8 rounded-full"
                      src={data.avatar.url}
                      alt={data.avatar.alt}
                    />
                  </div>
                  <div className="grow ms-4">
                    <div className="font-semibold text-gray-800 dark:text-gray-200">
                      {data.name}
                    </div>
                    <div className="text-xs text-gray-500">{data.title}</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-10">
              <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-slate-900">
                  <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative">
                        Get in Touch
                        <span className="absolute  left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-16 bg-[#2aefe6]"></span>
                      </span>
                    </h1>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      Let me know what&apos;s on your mind and I&apos;ll get
                      back to you as soon as possible.
                    </p>
                  </div>

                  <div className="mt-5">
                    <div className="flex flex-wrap gap-2 items-center justify-center text-center">
                      {Object.values(data.contact.social).map(
                        (social, index) => (
                          <div key={index}>
                            <Button
                              color="primary"
                              variant="flat"
                              size="sm"
                              as={Link}
                              href={social.url}
                              className="w-full text-gray-600 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <social.icon
                                className={`w-5 h-5 ${social.className}`}
                              />
                            </Button>
                          </div>
                        )
                      )}
                    </div>

                    <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-700 dark:after:border-gray-700">
                      Or
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="relative">
                          <Input
                            isRequired
                            type="text"
                            name="name"
                            value={name}
                            id="name"
                            onChange={(e) =>
                              validateInput(
                                e.target.value,
                                setName,
                                setNameError
                              )
                            }
                            isInvalid={Boolean(nameError)}
                            color={
                              nameError
                                ? "danger"
                                : name && !nameError
                                ? "success"
                                : undefined
                            }
                            errorMessage={nameError}
                            label="Full Name"
                            placeholder="John Doe"
                            labelPlacement="outside"
                            description=""
                            startContent={
                              <CgProfile className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            isClearable
                            onClear={() => setName("")}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="relative">
                          <Input
                            name="phone"
                            value={phone}
                            id="phone"
                            isInvalid={Boolean(phoneError)}
                            color={
                              phoneError
                                ? "danger"
                                : phone && !phoneError
                                ? "success"
                                : undefined
                            }
                            errorMessage={phoneError}
                            label="Phone Number"
                            placeholder="+63"
                            defaultValue="+63"
                            description=""
                            labelPlacement="outside"
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              if (validatePhone(inputValue)) {
                                setPhone(inputValue);
                                setPhoneError("");
                              } else {
                                setPhoneError(
                                  "Only digits, plus sign (+), hyphen (-), parentheses (), and whitespace are allowed."
                                );
                              }
                            }}
                            startContent={
                              <FaViber className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            isClearable
                            onClear={() => setPhone("")}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="relative">
                          <Input
                            isRequired
                            type="email"
                            name="email"
                            value={email}
                            id="email"
                            onChange={(e) =>
                              validateInput(
                                e.target.value,
                                setEmail,
                                setEmailError
                              )
                            }
                            onBlur={() => {
                              setEmailError(
                                validateEmail(email)
                                  ? ""
                                  : "Please enter a valid email"
                              );
                            }}
                            isInvalid={Boolean(emailError)}
                            color={
                              emailError
                                ? "danger"
                                : email && validateEmail(email)
                                ? "success"
                                : undefined
                            }
                            errorMessage={emailError}
                            label="Email"
                            placeholder="johndoe@sample.com"
                            labelPlacement="outside"
                            description="I'll never share your email with anyone else."
                            startContent={
                              <MdAlternateEmail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            isClearable
                            onClear={() => setEmail("")}
                          ></Input>
                        </div>
                      </div>

                      <Input type="hidden" name="from_name" value={name} />

                      <div>
                        <div className="relative">
                          <Input
                            isRequired
                            type="text"
                            name="subject"
                            value={subject}
                            id="subject"
                            onChange={(e) =>
                              validateInput(
                                e.target.value,
                                setSubject,
                                setSubjectError
                              )
                            }
                            isInvalid={Boolean(subjectError)}
                            color={
                              subjectError
                                ? "danger"
                                : subject && !subjectError
                                ? "success"
                                : undefined
                            }
                            errorMessage={subjectError}
                            label="Subject"
                            placeholder="Briefly describe the purpose of your message"
                            labelPlacement="outside"
                            description=""
                            startContent={
                              <HiOutlinePencilSquare className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            isClearable
                            onClear={() => setSubject("")}
                          />
                        </div>
                      </div>

                      <div className="relative col-span-full">
                        <div className="relative">
                          <Textarea
                            isRequired
                            name="message"
                            id="message"
                            value={message}
                            onChange={(e) =>
                              validateInput(
                                e.target.value,
                                setMessage,
                                setMessageError
                              )
                            }
                            isInvalid={Boolean(messageError)}
                            color={
                              messageError
                                ? "danger"
                                : message && !messageError
                                ? "success"
                                : undefined
                            }
                            errorMessage={messageError}
                            label="Message"
                            placeholder="Write a message..."
                            labelPlacement="outside"
                            endContent={
                              <BsTextareaResize className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center space-x-2">
                      <Checkbox
                        size="md"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                      ></Checkbox>
                      <div className="text-sm leading-6 text-gray-600">
                        <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                          By submitting this form I have read and acknowledged
                          the privacy policy.
                        </label>
                      </div>
                    </div>

                    <div className=" mt-5 flex justify-center">
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
                        </div>
                      ) : agreed ? (
                        <Button
                          type="submit"
                          color="primary"
                          variant="shadow"
                          size="md"
                          startContent={<FiSend />}
                          onClick={() => {
                            validateInput(name, setName, setNameError);
                            validateInput(email, setEmail, setEmailError);
                            validateInput(subject, setSubject, setSubjectError);
                            validateInput(message, setMessage, setMessageError);

                            if (!name || !email || !subject || !message) {
                              Swal.fire(
                                "Please fill in all required fields.",
                                "",
                                "warning"
                              );
                            }
                          }}
                        >
                          Send Inquiry
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          color="primary"
                          variant="shadow"
                          size="md"
                          isDisabled
                          startContent={<FiSend />}
                        >
                          Send Inquiry
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden sm:flex mt-6 md:mt-12 py-3 items-center text-sm text-gray-800 gap-x-1.5 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:after:border-gray-700">
          Id it
          <span className="font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
            reprehenderit
          </span>
          Ut laboris anim quis reprehenderit occaecat exercitation et ea ut id.
        </div>
      </div>
    </section>
  );
}
