.PHONY: install-deps-macos install-deps-ubuntu dl-test-images

install-deps-macos:
	brew update
	brew install openjdk

install-deps-ubuntu:
	sudo apt-get update
	sudo apt-get install -y --no-install-recommends openjdk-21-jre=21.*

dl-test-images:
	mkdir -p ./tests/assets/hamamatsu ./tests/assets/trestle ./tests/assets/mirax ./tests/assets/aperio
	#wget -q -O ./tests/assets/hamamatsu.zip "https://openslide.cs.cmu.edu/download/openslide-testdata/Hamamatsu-vms/CMU-3.zip"
	#unzip tests/assets/hamamatsu.zip -d ./tests/assets/hamamatsu
	#rm -f ./tests/assets/hamamatsu.zip
	#wget -q -O ./tests/assets/trestle.zip "https://openslide.cs.cmu.edu/download/openslide-testdata/Trestle/CMU-1.zip"
	#unzip tests/assets/trestle.zip -d ./tests/assets/trestle
	#rm -f ./tests/assets/trestle.zip
	#wget -q -O ./tests/assets/mirax.zip "https://openslide.cs.cmu.edu/download/openslide-testdata/Mirax/CMU-1-Saved-1_16.zip"
	#unzip tests/assets/mirax.zip -d ./tests/assets/mirax
	#rm -f ./tests/assets/mirax.zip
	#wget -q -O ./tests/assets/leica.scn "https://openslide.cs.cmu.edu/download/openslide-testdata/Leica/Leica-1.scn"
	wget -q -O ./tests/assets/aperio/CMU-1.svs "https://openslide.cs.cmu.edu/download/openslide-testdata/Aperio/CMU-1.svs"
