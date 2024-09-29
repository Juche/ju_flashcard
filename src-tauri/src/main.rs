// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;
use window_shadows::set_shadow;
use window_vibrancy::*;

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            // let window = app.get_webview_window("main").unwrap();
            let window = app.get_window("main").unwrap();

            // apply_blur(Win10 & Win11) / apply_acrylic(Win10 & Win11) / apply_mica(Win11) / apply_vibrancy(MacOS)

            #[cfg(target_os = "macos")]
            apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, None)
                .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

            #[cfg(target_os = "windows")]
            apply_blur(&window, Some((222, 222, 222, 200)))
                .expect("Unsupported platform! 'apply_blur' is only supported on Windows");

            #[cfg(any(windows, target_os = "macos"))]
            set_shadow(&window, true).unwrap();

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
