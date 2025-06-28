// ecosystem.config.js
module.exports = {
    apps: [
        {
            name: 'starlight-dev',
            script: 'npm',
            args: 'run dev -- --host 0.0.0.0',  // Bind to all interfaces for remote access
            cwd: process.cwd(),
            instances: 1,
            exec_mode: 'fork',
            watch: true,  // Enable watching for development
            ignore_watch: [
                'node_modules',
                'logs',
                '.git',
                'dist',
                '.astro'
            ],
            watch_options: {
                followSymlinks: false,
                usePolling: false
            },
            max_memory_restart: '500M',  // Lower memory limit for dev
            min_uptime: '10s',  // Minimum uptime before considering restart
            max_restarts: 5,  // Limit restarts in case of issues
            restart_delay: 1000,  // 1 second delay between restarts
            env_development: {
                NODE_ENV: 'development',
                PORT: 4321,
                HOST: '0.0.0.0'
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 4321,
                HOST: '0.0.0.0'
            },
            log_file: './logs/dev-combined.log',
            out_file: './logs/dev-out.log',
            error_file: './logs/dev-error.log',
            log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
            merge_logs: true,
            // Development-specific options
            source_map_support: true,
            instance_var: 'INSTANCE_ID'
        }
    ]
};