#make sure npm is installed



echo "Make sure the 'npm' and 'sudo' package is installed else the make script wont work!"

echo
echo
echo '------------------------'
echo 'installing pkg...'
sudo npm i -g pkg
echo '------------------------'
echo 
echo
echo
echo '------------------------'
echo 'using pkg...'


pkg main.js -t node*-linux-x64


echo
echo
echo '------------------------'


echo Done!
#how am i a programer if i am lazy?
