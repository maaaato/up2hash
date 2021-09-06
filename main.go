package main

import (
	"crypto/sha256"
	"encoding/hex"
	"flag"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
)

func main() {
	flag.Parse()
	args := flag.Args()
	if len(args) <= 0 {
		os.Stderr.WriteString("Please input text\n")
		return
	}
	url := args[0]

	resp, _ := http.Get(url)
	defer resp.Body.Close()

	byteArray, _ := ioutil.ReadAll(resp.Body)
	result := sha256.Sum256(byteArray)

	fmt.Printf("URL: %s \n", url)
	fmt.Printf("SHA256: %s", strings.ToUpper(hex.EncodeToString(result[:])))
}
