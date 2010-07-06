import scipy
def classify(testfile,p_mal,p_cond_learn):
        """to classify an unknown JS as malicious or safe
                using Naive Bayes classification"""

	given_feature = {}
	posterior_prob,p_script_mal = scipy.ones(4),scipy.zeros(4)
        print "The learned prior probability is ", p_mal
	print "The learned posterior probability: " 
	print "[obfuscation(true, false),document.write(true, false),white space(less that 15%-yes or no), comments(less than 2%- yes or no)]"
	print p_cond_learn
	i = 0
	feature_entered = []
        for data in open(testfile,'r'):
		feature_entered.append(data)
                attrs = data.split(',')
		for attr in attrs:
                       key,value = attr.split('=')
                       key = key.strip()
		       value = value.strip()
                       given_feature[key] = value
		for key in given_feature.keys():
			if key == "obf":
				if given_feature[key] == "F":
					posterior_prob[i] *= p_cond_learn[1]
				else:
					posterior_prob[i] *= p_cond_learn[0]
			if key == "docframe":
				if given_feature[key] == "F":
					posterior_prob[i] *= p_cond_learn[3]
				else:
					posterior_prob[i] *= p_cond_learn[2]
			if key == "comment":
				if int(given_feature[key]) < 2:
					posterior_prob[i] *= p_cond_learn[4]
				else:
					posterior_prob[i] *= p_cond_learn[5]
			if key == "white":
				if int(given_feature[key]) < 15:
					posterior_prob[i] *= p_cond_learn[6]
				else:
					posterior_prob[i] *= p_cond_learn[7]
		p_script_mal[i] = p_mal*posterior_prob[i]
		i += 1
	try:
		fout = open("result_prob.txt","wb")
		for i in range(4):	
			fout.write(feature_entered[i]+'\b')
			fout.write(str(p_script_mal[i])+'\n')
		fout.close()
	except IOError:
		pass
	print "The probability of scripts being malicious given features is :"
	print p_script_mal
	

def train_classifiers(train_file):
	"""training of the bayesian classifiers"""
	feature_dict_mal,feature_dict_safe = {},{}
	n_mal,n_safe = 0,0
	num_feature = scipy.zeros(8)
	for data in open(train_file,'r'):
		attrs = data.split(';')
		try:
			klass,variety = attrs[1].split('=')
			variety = variety.strip()
			if variety.lower() == "mal":
        	        	n_mal += 1
				features = attrs[0].split(',')
				for feature in features:
					key,value = feature.split('=')
					key = key.strip()
					feature_dict_mal[key] = value
				for key in feature_dict_mal.keys():
					if key == "obf":
						if feature_dict_mal[key] == "T":
							num_feature[0] += 1
						else:	
							num_feature[1] += 1
					if key == "docframe":
						if feature_dict_mal[key] == "T":
							num_feature[2] += 1
						else:
							num_feature[3] += 1
					if key == "comment":
						if int(feature_dict_mal[key]) < 2:
							num_feature[4] += 1
						else:
							num_feature[5] += 1
					if key == "white":
						if int(feature_dict_mal[key]) < 15:
							num_feature[6] += 1
						else:
							num_feature[7] += 1
			else:
				n_safe += 1
				features = attrs[0].split(',')
        	                for feature in features:
        	                        key,value = feature.split('=')
        	                        feature_dict_safe[key] = value
		except:
			IndexError
	p_mal = float(n_mal)/(n_mal+n_safe)
	p_cond_learn = scipy.zeros(8)
	for i in range(8):
		p_cond_learn[i] = float(num_feature[i])/n_mal
	classify("test_data.txt",p_mal,p_cond_learn)

if __name__ == '__main__':
	train_classifiers("training_data.txt")
