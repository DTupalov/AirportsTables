## Troubleshooting

### Bundle load failed

https://github.com/oblador/react-native-vector-icons/issues/626#issuecomment-357405396

You need to delete specific file

    rm ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json
    
Then, restart packager

More info: 

### withState in Storybook

https://github.com/dump247/storybook-state/issues/2
https://storybook.js.org/basics/faq/#why-is-there-no-addons-channel 

If you have such message "Accessing nonexistent addons channel" then you need to wrap your stories with
 
    setTimeout(() => {
      ...
      storiesOf('BottomMenu', module)
        .add(...)
      ...
    }, 0)

### Possible issues if you are migrating to a new MacOS or XCode or start project on a new Macbook
https://github.com/facebook/react-native/issues/8868
https://github.com/facebook/react-native/issues/19569#issuecomment-432998870
https://github.com/facebook/react-native/issues/20774
