<?php
// Register the block
function register_json_result_block() {
    // Register the block editor script (index.js)
    wp_register_script(
        'json-placeholder-block-editor',
        plugins_url( 'build/json-placeholder-mock-block/index.js', __FILE__ ), // Correct path to your index.js file
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // WordPress dependencies
        filemtime( plugin_dir_path( __FILE__ ) . 'build/json-placeholder-mock-block/index.js' ) // Cache-busting for development
    );

    // Register the block using block.json, and associate it with the editor script
    register_block_type_from_metadata( __DIR__ . '/src/json-placeholder-mock-block', array(
        'editor_script' => 'json-placeholder-block-editor',
    ));
}
add_action('init', 'register_json_result_block');

// Define the render callback function
function render_dynamic_json_block($attributes) {
    $json_result = isset($attributes['jsonResult']) ? $attributes['jsonResult'] : [];
    $is_error = isset($attributes['isErrorMsg']) ? $attributes['isErrorMsg'] : false;

    if ($is_error) {
        return '<div>Error: JSON data is not loading correctly!</div>';
    }

    // Create HTML for JSON result (assuming it's an array or object)
    $json_result_html = '<div class="json-result-block">';
    if (is_array($json_result)) {
        foreach ($json_result as $key => $value) {
            $json_result_html .= "<div><strong>{$key}:</strong> {$value}</div>";
        }
    } else {
        $json_result_html .= esc_html($json_result);
    }
    $json_result_html .= '</div>';

    return $json_result_html;
}