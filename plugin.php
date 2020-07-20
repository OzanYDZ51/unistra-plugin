<?php
/**
 * Plugin Name: Unistra Block
 * Plugin URI: https://dynamic-web.fr
 * Description: Unistra Block is a gutenberg custom block
 * Author: Unistra Dev Team
 * Author URI: https://dynamic-web.fr
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
