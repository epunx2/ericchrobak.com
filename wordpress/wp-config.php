<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress-37314ca5');

/** MySQL database username */
define('DB_USER', 'wordpress-37314ca5');

/** MySQL database password */
define('DB_PASSWORD', '0812e5c123dd');

/** MySQL hostname */
define('DB_HOST', 'shareddb-g.hosting.stackcp.net');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'pHSJMbCfWKk4i8c6j03TEsvGGZ7Mdnre');
define('SECURE_AUTH_KEY',  'tXd9GGo3g3c+XrvmrI0F19uGQNqgnAuG');
define('LOGGED_IN_KEY',    '5mUbuRWDMar7WtPoMxMZlNV4H8VeYGxr');
define('NONCE_KEY',        '6z3/L6WH+J9lMsu/dxglJK17CzIVSsjX');
define('AUTH_SALT',        'AXBaLuds/16b9Rc5Pox6PaY5oTPZJqje');
define('SECURE_AUTH_SALT', 'QkzqnTl4JHiW1W7NOb4Xx4u6f0WIWaon');
define('LOGGED_IN_SALT',   '1K/+tcB1aJgI/tZkw2uTZHeBZod04Qgs');
define('NONCE_SALT',       'SoiGowzxrvSNeS8oH/zgTP/pPpubeHqf');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
