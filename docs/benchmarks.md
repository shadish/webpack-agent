Capturing some benchmarks for yarn@1.7.0 vs npm@5.6.0
# post-cache
time npm i 32.937s
package-lock.json 468K
node_modules 229M

# pre-cache
time yarn install 40.51s
yarn.lock 276K
node_modules 195M

# post-cache
time yarn install 21.23s
yarn.lock 276K
node_modules 195M
