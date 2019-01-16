<?php

/**
 * The autoloader.
 *
 * PHP version 5
 *
 * @category  CMSimple_XH
 * @package   Tinymce5
 * @author    Christoph M. Becker <cmbecker69@gmx.de>
 * @author    manu <info@pixolution.ch>
 * @copyright 2015 Christoph M. Becker <http://3-magi.net>
 * @license   http://www.gnu.org/licenses/gpl-3.0.en.html GNU GPLv3
 * @link      http://3-magi.net/?CMSimple_XH/Onepage_XH
 */

/**
 * Autoloads the plugin classes.
 *
 * @param string $class A class name.
 *
 * @return void
 *
 * @global array The paths of system files and folders.
 */

function JWT_autoload($class)
{
    global $pth;
    if ($class ==='Firebase\JWT\JWT')
        include_once $pth['folder']['plugins'] . 'tinymce5/classes/jwt/JWT.php';
}

spl_autoload_register('JWT_autoload');
?>
