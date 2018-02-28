## Troubleshooting

### Bundle load failed

You need to delete specific file

    rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json
    
Then, restart packager

More info: https://github.com/oblador/react-native-vector-icons/issues/626#issuecomment-357405396
