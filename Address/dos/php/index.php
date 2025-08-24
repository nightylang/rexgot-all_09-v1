<?php

session_start();

$errors = [
    'login' => $_SESSION['login_error'] ?? '',
    'signup' => $_SESSION['register_error'] ?? ''
];
$activeForm = $_SESSION['active_form'] ?? 'login';

session_unset();

function showError($error){
    return !empty($error) ? "<p class='error-message'>$error</p>" : '';
}
function isActiveForm($formName, $activeForm){
    return $formName === $activeForm ? 'active' : '';
}

?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="dark" />
    <title>Lang test Bootstrap v5</title>
    <link rel="stylesheet" href="media.min.css">
    <link rel="stylesheet" href="gr.css">
</head>

<body class="body">

    <div class="main">
        <div class="forlogin demo <?= isActiveForm('login', $activeForm) ?> container" id="plogin">
            <form action="data.php" method="post">
                <h2 class="text-center ma-b-20 ma-t-20">Login</h2>
                <?= showError($errors['login']); ?>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <button class="ma-l-50" type="submit" name="login">Login</button>
                <p class="p ">Don't have an account?<a class="a" href="#" onclick="showFor('psignup')">Register</a></p>
            </form>
        </div>

        <div class="forsignup demo <?= isActiveForm('signup', $activeForm) ?>" id="psignup">
            <form action="data.php" method="post">
                <h2 class="text-center ma-b-20 ma-t-20">Sign up</h2>
                <?= showError($errors['signup']); ?>
                <input type="text" name="username" placeholder="Username" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <select name="role" required>
                    <option value="">--Role--</option>
                    <option value="IT">Information Technology</option>
                    <option value="CS">Computer Science</option>
                </select>
                <button class="ma-l-50" type="submit" name="signup">Sign up</button>
                <p class="p ">Already have an account?<a class="a" href="#" onclick="showFor('plogin')">Sign in</a></p>
            </form>
        </div>
    </div>


    <script src="lang.js"></script>
</body>

</html>