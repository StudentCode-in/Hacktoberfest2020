import cv2
img = cv2.imread("single.jpeg")
resized_image = cv2.cvtColor(img, cv2.COLOR_bgr2gray)
window = cv2.imshow("Output", resized_image)
cv2.waitKey(0)
cv2.destroyAllWindows()