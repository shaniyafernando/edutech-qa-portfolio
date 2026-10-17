# Authentication 

## ETQP-AUTH-01 New account registration

**Summary:** Verify a GUEST USER can create a new account.

**Preconditions:** 
  1. The user doesn't have an existing account.
  2. Navigate to 'https://demo.realworld.show/'

**Steps:** 
  1. Click on 'Sign up' button in the navigation bar. 
  2. Check url is 'https://demo.realworld.show/register'.
  3. Enter a unique username.
  4. Enter a valid email.
  5. Enter a valid password.
  6. Click on 'Sign up' button.
**PostConditions:**
  1. Navigate to 'https://demo.realworld.show/'
  2. 'New Article' button is visible in the navigation bar.
  3. 'Settings' button is visible in the navigation bar.
  4. Default avatar and valid username is visible in the navigation bar.
  5. 'Your Feed' and 'Global Feed' tabs are under main content area.
**Expected Results:** Account is successfully created. User is automatically logged in and redirected to the home feed.

## ETQP-AUTH-02 Valid login

**Summary:** Verify a USER can login successfully with accurate credentials.

**Preconditions:** 
  1. The user has an existing account.
  2. Navigate to 'https://demo.realworld.show/'

**Steps:**
  1. Click on 'Sign in' button in the navigation bar. 
  2. Check url is 'https://demo.realworld.show/login'.
  4. Enter a valid email.
  5. Enter a valid password.
  6. Click on 'Sign in' button.
**Postconditions:**
  1. Navigate to 'https://demo.realworld.show/'
  2. 'New Article' button is visible in the navigation bar.
  3. 'Settings' button is visible in the navigation bar.
  4. Default avatar and valid username is visible in the navigation bar.
  5. 'Your Feed' and 'Global Feed' tabs are under main content area.
**Expected Results:** User is automatically logged in and redirected to the home feed.

## ETQP-AUTH-03 Login with invalid email

**Summary:** Verify a USER can not login successfully with inaccurate email.

**Preconditions:** 
  1. The user has an existing account.
  2. Navigate to 'https://demo.realworld.show/'

**Steps:**
  1. Click on 'Sign in' button in the navigation bar. 
  2. Check url is 'https://demo.realworld.show/login'.
  4. Enter a invalid email.
  5. Enter a valid password.
  6. Click on 'Sign in' button.
**Expected Results:** User is not automatically logged in and an error message 'Credentials invalid' must be displayed.

## ETQP-AUTH-04 Login with invalid password

**Summary:** Verify a USER can not login successfully with inaccurate password.

**Preconditions:** 
  1. The user has an existing account.
  2. Navigate to 'https://demo.realworld.show/'

**Steps:**
  1. Click on 'Sign in' button in the navigation bar. 
  2. Check url is 'https://demo.realworld.show/login'.
  4. Enter a valid email.
  5. Enter a invalid password.
  6. Click on 'Sign in' button.
**Expected Results:** User is not automatically logged in and an error message 'Credentials invalid' must be displayed.

## ETQP-AUTH-05 Secure logout

**Summary:** Verify a User can logout successfully.

**Preconditions:** The user must be logged in.

**Steps:**
  1. Click on 'Settings' in navigation bar.
  2. Click on 'Or click here to logout.'
**Postconditions:** Navigate to home page with permissions for a GUEST USER.
**Expected Results:** The user will be redirected to the home feed.

## ETQP-AUTH-06 New account registration with duplicate email

**Summary:** Verify a new account can not be created with an existing email.

**Preconditions:** 
  1. Navigate to 'https://demo.realworld.show/' account.
  2. The user must enter an email of an existing

**Steps:** 
  1. Click on 'Sign up' button in the navigation bar. 
  2. Check url is 'https://demo.realworld.show/register'.
  3. Enter a unique username.
  4. Enter a valid existing email.
  5. Enter a valid password.
  6. Click on 'Sign up' button.
**Expected Results:** Account is not successfully created. Display an error message 'An account exists with this email'.

## ETQP-AUTH-07 Register with insecure password

**Summary:** Verify a USER can not enter an insecure password and register.

**Preconditions:** 
  1. The user is not an existing account.
  2. Navigate to 'https://demo.realworld.show/register'

**Steps:**
  4. Enter a valid email.
  5. Enter a insecure password.
  6. Click on 'Sign in' button.
**Expected Results:** User is not automatically logged in and an error message 'Credentials invalid' must be displayed.


---

# Browse Public Posts  

## ETQP-BP-01 Global Feed accessibility for guest users

**Summary:** Verify the home page loads the **Global Feed** by default as a guest user, displaying a list of public articles from all users.

**Preconditions:** The user is not logged in.

**Steps:** 
  1. Navigate to 'https://demo.realworld.show'
  2. Click on an article card (title, description, read more)
  3. Check url if the correct page has been navigated to
**Expected Results:** 
  1. The 'Global Feed' tab must be visible, displaying articles.
  2. 'New Article', 'Settings', Avartar in navigation bar is not visible.
  3. 'Home', 'Sign up', 'Sign in' is visible in the navigation bar.

## ETQP-BP-02 Feed article card content elements

**Summary:** Verify article card content elements

**Preconditions:** 
  1. The user is not logged in.
  2. Navigate to 'https://demo.realworld.show'

**Steps:**
  1. Click/Scroll to 'Global Feed' tab
  2. Select a card.
**Expected Results:** 
  1. The authors' avatar and username must be visible.
  2. The published date of the article must be visible.
  3. The title of the article must be visible in bold large black text.
  4. The description of the article must be visible in light grey subtitle text.
  5. 'Read more...' link must be visible.
  6. The favourite button with the number of likes must be visible as green outline button and must have a heart icon.

## ETQP-BP-03 Filter feed by popular tag

**Summary:** Verify global feed gets filtered after clicking on a clip listed under popular tags section

**Preconditions:** 
  1. The user is not logged in.
  2. Navigate to 'https://demo.realworld.show'

**Steps:**
  1. Scroll down to 'Popular Tags' tab
  2. Select a tag.
**Expected Results:** 
  1. The global feed must filter articles with the selected tag.
  2. The seleced tag must be visible in each filtered article in the global feed.

## ETQP-BP-04 Restriction interaction with favourite button for GUEST USER

**Summary:** Verify the number of favourites doesnt inclease when the button is clicked by a GUEST USER.

**Preconditions:** 
  1. The user is not logged in.
  2. Navigate to 'https://demo.realworld.show'

**Steps:**
  1. Scroll down to 'Global Feed' tab
  2. Select the first article.
  3. Click on the Favourite (heart icon) button.
**Expected Results:** The user is redirected to the sign in page.

## ETQP-BP-05 Global Feed toggle for logged-in users

**Summary:** Verify a logged in user can toggle between 'Global Feed' and 'Your Feed'

**Preconditions:** 
  1. The user is logged in.
  2. Navigate to 'https://demo.realworld.show'

**Steps:**
  1. Click 'Global Feed' tab
  2. Check articles are visible.
  3. Click 'Your Feed' tab.
  4. Check articles written by authors followed by user are visible.
  Continue the next steps if no articles exists,
  5. Click 'Global Feed' tab
  6. Click on the first article.
  7. Click on 'follow {{author name}}'
  8. Navigate to 'https://demo.realworld.show'
  9. Click 'Your Feed' tab.
  10. Check if all articles have author name only.
**Expected Results:** The user can view articles written.

## ETQP-BP-06 Interaction with favourite button for logged-in USER

**Summary:** Verify the favorite icon on an article card increments the like count and visually toggles the button state to indicate success. Also navigate to profile and then to favouriteposts to see if the posts are visible.

**Preconditions:** 
  1. The user is logged in.
  2. Navigate to 'https://demo.realworld.show'

**Steps:**
  1. Scroll down to 'Global Feed' tab
  2. Select a random article.
  3. Click on the Favourite (heart icon) button.
  4. Iterate steps 2-3 once more.
  5. Check to see the buttons on both articles change from outlined button to filled button styles
  6. Click on username or avartar in navigation bar.
  7. Click on 'Favourite Posts' tab.
  8. Check if the liked articles are listed.
**Expected Results:** The buttons on both liked articles change from outlined button to filled button styles. and these articles must be listed under favourites under the user profile.

---

# Create & Publish New Post 

## ETQP-NEWP-01: Successfully publish an article with all fields filled

**Summary:** Verify that an authenticated user can create and publish a new article when all required fields and optional tags are populated correctly.

**Steps:**
1. Navigate to 'https://demo.realworld.show/editor'.
2. Enter a valid title in the "Article Title" field.
3. Enter a description in the "What's this article about?" field.
4. Enter markdown content in the body field.
5. Type one or more tags in the "Enter tags" field and press `Enter`.
6. Click the **[Publish Article](https://demo.realworld.show/editor)** button.

**Expected Result:** The article is successfully created, and the user is redirected to the newly created article's view page.


## ETQP-NEWP-02: Successfully publish an article without tags

**Summary:** Verify that tags are optional and an article can be published without adding any tags.

**Steps:**
1. Navigate to [Conduit Editor](https://demo.realworld.show/editor).
2. Fill in the *Article Title*, *About*, and *Body* fields.
3. Leave the *Enter tags* field empty.
4. Click **[Publish Article](https://demo.realworld.show/editor)**.

**Expected Result:** The article is published successfully without errors.


## ETQP-NEWP-03: Markdown formatting renders in the article body

**Summary:** Verify that standard markdown syntax (headers, lists, bold text, code blocks) entered in the body textarea is accepted and formatted correctly upon publication.

**Steps:**
1. Enter markdown syntax in the body textarea (e.g., `**Bold**`, `# Header 1`).
2. Click **[Publish Article](https://demo.realworld.show/editor)**.


**Expected Result:** The published article view renders the markdown text according to standard markdown specifications.


## ETQP-NEWP-04: Submit with all fields empty

**Summary:** Verify system behavior when attempting to publish an article without entering any content.

**Steps:**
1. Navigate to [Conduit Editor](https://demo.realworld.show/editor) with all fields blank.
2. Click **[Publish Article](https://demo.realworld.show/editor)**.

**Expected Result:** The form prevents submission, and validation error messages appear for the required fields (Title, Description, Body).


## ETQP-NEWP-05: Submit with missing Article Title

**Summary:** Verify that the "Article Title" field is mandatory.

**Steps:**
1. Leave "Article Title" blank.
2. Fill out "What's this article about?" and "Write your article (in markdown)".
3. Click **[Publish Article](https://demo.realworld.show/editor)**.

**Expected Result:** Form submission fails with an error message 'title can't be blank' indicating that the title cannot be blank.


## ETQP-NEWP-06: Submit with missing Article Body

**Summary:** Verify that the article body is mandatory.

**Steps:**
1. Fill in "Article Title" and "What's this article about?".
2. Leave the markdown body textarea completely blank.
3. Click **[Publish Article](https://demo.realworld.show/editor)**.

**Expected Result:** Form submission fails with a validation error indicating the body is required.

## ETQP-NEWP-07: Extremely long Article Title
**Summary:** Test how the form and backend handle excessively long strings in the title field.

**Steps:**
1. Enter a 500+ character string into the "Article Title" field.
2. Fill out the remaining required fields and click **[Publish Article](https://demo.realworld.show/editor)**.

**Expected Result:** The system either gracefully truncates the title, displays a clear character-limit warning, or successfully handles the long text without breaking the UI layout.

## ETQP-NEWP-08: Special characters and emojis in fields

**Summary:** Verify input sanitization and encoding for special characters, foreign alphabets, and emojis.

**Steps:**
1. Enter special characters (`<script>alert(1)</script>`, `!@#$%^&*()`) and emojis (`🚀✨`) into the title and body fields.
2. Click **[Publish Article](https://demo.realworld.show/editor)**.

**Expected Result:** Characters are safely parsed/escaped (preventing XSS vulnerabilities) and rendered correctly without causing server errors.


## ETQP-NEWP-09: Adding multiple tags with duplicate values

**Summary:** Verify how the tag input handles duplicate tags.

**Steps:**
1. Add the tag `javascript`, press enter, then try adding `javascript` again.
2. Publish the article.

**Expected Result:** Duplicate tags are either filtered out automatically or prevented from being added twice.

# Edit and Delete Post 

## ETQP-EXP-01 Successfully edit an article

**Summary:** Verify that the author of the article can click the 'Edit Article' button and successfully modify the article's details.

**Preconditions:**
1. The user is logged in and owns the article.
2. Navigate to an article view page (e.g., '[https://demo.realworld.show/article/sample-article](https://www.google.com/search?q=https://demo.realworld.show/article/sample-article)').

**Steps:**
3. Click on the 'Edit Article' button in the article header banner.
4. Check url is the editor page.

**Postconditions:**
5. The editor form fields are pre-populated with the existing article data.

**Expected Results:** The user is redirected to the editor page with pre-populated fields from the existing article, allowing them to make and save updates.

## ETQP-EXP-02 Successfully post a valid comment

**Summary:** Verify that an authenticated user can type a comment in the text box and post it successfully to the article thread.

**Preconditions:**
1. The user is logged in.
2. Navigate to an article view page.

**Steps:**
3. Click into the 'Write a comment...' textarea.
4. Enter valid text (e.g., 'Great insights, thanks for sharing!').
5. Click on the 'Post Comment' button.

**Postconditions:**
6. The 'Write a comment...' textarea is cleared.

**Expected Results:** The comment is successfully posted, and it instantly appears in the comment feed below with the user's details and timestamp.

## ETQP-EXP-03 Successfully delete an individual comment

**Summary:** Verify that a user can delete a comment they authored using the delete icon next to the comment.

**Preconditions:**
1. The user is logged in.
2. Navigate to an article view page containing a comment authored by the logged-in user.

**Steps:**
3. Locate the comment authored by the logged-in user in the comment thread.
4. Click on the delete/trash icon associated with that specific comment.

**Expected Results:** The comment is immediately removed from the comment thread view.

## ETQP-EXP-04 Submit an empty comment

**Summary:** Verify system behavior when attempting to submit a blank comment box.

**Preconditions:**

1. The user is logged in.
2. Navigate to an article view page.

**Steps:**
3. Leave the 'Write a comment...' textarea completely empty.
4. Click on the 'Post Comment' button.

**Expected Results:** The system prevents the submission, and no blank comment is added to the thread.

## ETQP-EXP-05 Unauthorized article modification or deletion

**Summary:** Verify that non-author users do not see administrative controls (Edit/Delete buttons) for an article.

**Preconditions:**

1. The user is logged in as a different user who does not own the article.
2. Navigate to the article page.

**Steps:** Observe the article header banner area.

**Expected Results:** The 'Edit Article' and 'Delete Article' buttons are either hidden or disabled for this user.

## ETQP-EXP-06 Delete article confirmation flow

**Summary:** Verify the behavior when clicking the 'Delete Article' button.

**Preconditions:**

1. The user is logged in and is the author of the article.
2. Navigate to the article view page.

**Steps:** Click on the 'Delete Article' button at the top of the article.

**Postconditions:** Navigate to '[https://demo.realworld.show/](https://demo.realworld.show/)'

**Expected Results:** The article is permanently deleted, and the user is redirected back to the home feed.

## ETQP-EXP-07 Extremely long comment input

**Summary:** Verify layout integrity when submitting a very long block of text or code into the comment section.

**Preconditions:**
1. The user is logged in.
2. Navigate to an article view page.

**Steps:**
1. Paste a multi-paragraph text or continuous string exceeding 1,000 characters into the 'Write a comment...' textarea.
2. Click on the 'Post Comment' button.

**Expected Results:** The comment wraps properly within the container boundaries without breaking the UI layout or overlapping adjacent elements.




