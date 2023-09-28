import React, { Children } from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";


// test("renders NavBar", () => {
//   render(
//     <Router>
//       <NavBar />
//     </Router>,
//   );
//   // screen.debug();
//   const signInLink = screen.getByRole("link", { name: "Sign in" });
//   expect(signInLink).toBeInTheDocument();
// });



// test("renders Sign in and Sign up buttons again on log out", async () => {
//   render(
//     <Router>
//       <CurrentUserProvider>
//         <NavBar />
//       </CurrentUserProvider>
//     </Router>,
//   );

//   const signOutLink = await screen.findByRole("link", { name: "Sign out" });
//   fireEvent.click(signOutLink);

//   const signInLink = await screen.findByRole("link", { name: "Sign in" });
//   const signUpLink = await screen.findByRole("link", { name: "Sign up" });

//   expect(signInLink).toBeInTheDocument();
//   expect(signUpLink).toBeInTheDocument();
// });

const customTextMatcher = (content, element) => {
  const elementText = element.textContent || "";
  // Normalize the text and search for it
  const normalizedContent = content.toLowerCase();
  const normalizedElementText = elementText.toLowerCase();
  return normalizedElementText.includes(normalizedContent);
};

test("renders link to the user profile for a logged-in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const profileAvatar = await screen.findByText((content, element) =>
  customTextMatcher("Profile", element)
);
  expect(profileAvatar).toBeInTheDocument();
});
