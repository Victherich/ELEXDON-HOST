// checkout.php
// <?php
// // Allow all origins (for development – restrict in production)
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type');

// // Handle OPTIONS preflight request and exit early
// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     http_response_code(200);
//     exit;
// }

// header('Content-Type: application/json');

// // WHMCS API credentials
// $apiUrl = "https://portal.elexdonhost.com.ng/includes/api.php";
// $username = "1ZDawYiHgSrWtcNHxMMnrxNOXWrVuhf5";
// $password = "oaqCUTnic0Z4TIKMOgN1eODGeWwnjDaS";

// // Read JSON body from React
// $input = json_decode(file_get_contents('php://input'), true);

// // Validate required fields
// $requiredFields = ['firstname', 'lastname', 'email', 'password', 'domain', 'domaintype', 'pid', 'billingcycle'];
// foreach ($requiredFields as $field) {
//     if (empty($input[$field])) {
//         http_response_code(400);
//         echo json_encode(['success' => false, 'message' => "Missing field: $field"]);
//         exit;
//     }
// }

// // Step 1: Create the Client
// $clientFields = [
//     'action'       => 'AddClient',
//     'username'     => $username,
//     'password'     => $password,
//     'responsetype' => 'json',
//     'firstname'    => $input['firstname'],
//     'lastname'     => $input['lastname'],
//     'email'        => $input['email'],
//     'companyname'  => $input['companyname'] ?? '',
//     'address1'     => $input['address1'] ?? 'Default Address',
//     'address2'     => $input['address2'] ?? '',
//     'city'         => $input['city'] ?? 'Default City',
//     'state'        => $input['state'] ?? 'Default State',
//     'postcode'     => $input['postcode'] ?? '000000',
//     'country'      => $input['country'] ?? 'NG',
//     'phonenumber'  => $input['phonenumber'] ?? '0000000000',
//     'password2'    => $input['password']
// ];


// $clientId = null;
// $clientResponse = whmcs_api_call($apiUrl, $clientFields, $username, $password);

// if (!isset($clientResponse['clientid'])) {
//     echo json_encode(['success' => false, 'message' => 'Failed to create client', 'details' => $clientResponse]);
//     exit;
// }
// $clientId = $clientResponse['clientid'];

// // Step 2: Place the Order
// $orderFields = [
//     'action'       => 'AddOrder',
//     'responsetype' => 'json',
//     'username'     => $username,
//     'password'     => $password,
//     'clientid'     => $clientId,
//     'pid'          => $input['pid'],
//     'domain'       => $input['domain'],
//     'domaintype'   => $input['domaintype'],
//     'billingcycle' => $input['billingcycle'],
//     'paymentmethod'=> 'banktransfer' // or 'stripe', 'banktransfer', etc. depending on your WHMCS setup
// ];

// $orderResponse = whmcs_api_call($apiUrl, $orderFields, $username, $password);

// if (!isset($orderResponse['orderid'])) {
//     echo json_encode(['success' => false, 'message' => 'Failed to place order', 'details' => $orderResponse]);
//     exit;
// }

// // Step 3: Redirect to WHMCS invoice/payment
// $invoiceId = $orderResponse['invoiceid'] ?? null;
// if ($invoiceId) {
//     $redirectUrl = "https://portal.elexdonhost.com.ng/viewinvoice.php?id={$invoiceId}";
//     echo json_encode(['success' => true, 'redirect_url' => $redirectUrl, 'invoiceId' => $invoiceId]);
// } else {
//     echo json_encode(['success' => false, 'message' => 'Order placed but no invoice generated']);
// }

// function whmcs_api_call($url, $fields, $username, $password) {
//     $ch = curl_init();
//     curl_setopt($ch, CURLOPT_URL, $url);
//     curl_setopt($ch, CURLOPT_POST, true);
//     curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($fields));
//     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//     curl_setopt($ch, CURLOPT_TIMEOUT, 30);
//     $response = curl_exec($ch);
//     $error = curl_error($ch);
//     curl_close($ch);

//     if ($error) {
//         return ['error' => $error];
//     }

//     return json_decode($response, true);
// }





