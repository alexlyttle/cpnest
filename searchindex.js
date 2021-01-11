Search.setIndex({docnames:["cpnest","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["cpnest.rst","index.rst","modules.rst"],objects:{"":{cpnest:[0,0,0,"-"]},"cpnest.NestedSampling":{NestedSampler:[0,1,1,""]},"cpnest.NestedSampling.NestedSampler":{checkpoint:[0,2,1,""],consume_sample:[0,2,1,""],get_worst_n_live_points:[0,2,1,""],nested_sampling_loop:[0,2,1,""],reset:[0,2,1,""],resume:[0,2,1,""],setup_output:[0,2,1,""],setup_random_seed:[0,2,1,""],write_chain_to_file:[0,2,1,""],write_evidence_to_file:[0,2,1,""]},"cpnest.cpnest":{CPNest:[0,1,1,""],CheckPoint:[0,3,1,""],RunManager:[0,1,1,""],sighandler:[0,4,1,""]},"cpnest.cpnest.CPNest":{checkpoint:[0,2,1,""],get_mcmc_samples:[0,2,1,""],get_nested_samples:[0,2,1,""],get_posterior_samples:[0,2,1,""],get_prior_samples:[0,2,1,""],plot:[0,2,1,""],profile:[0,2,1,""],run:[0,2,1,""],worker_ns:[0,2,1,""],worker_sampler:[0,2,1,""]},"cpnest.cpnest.RunManager":{connect_producer:[0,2,1,""],start:[0,2,1,""]},"cpnest.logger":{CPNestLogger:[0,1,1,""]},"cpnest.logger.CPNestLogger":{add_file_handler:[0,2,1,""],add_stream_handler:[0,2,1,""],update:[0,2,1,""]},"cpnest.model":{Model:[0,1,1,""],uniform:[0,4,1,""]},"cpnest.model.Model":{bounds:[0,5,1,""],force:[0,2,1,""],from_normalised:[0,2,1,""],header:[0,2,1,""],in_bounds:[0,2,1,""],log_likelihood:[0,2,1,""],log_prior:[0,2,1,""],names:[0,5,1,""],new_point:[0,2,1,""],potential:[0,2,1,""],strsample:[0,2,1,""],to_normalised:[0,2,1,""]},"cpnest.nest2pos":{acl:[0,4,1,""],autocorrelation:[0,4,1,""],compute_weights:[0,4,1,""],draw_N_posterior:[0,4,1,""],draw_N_posterior_many:[0,4,1,""],draw_posterior:[0,4,1,""],draw_posterior_many:[0,4,1,""],log_integrate_log_trap:[0,4,1,""],logsubexp:[0,4,1,""],resample_mcmc_chain:[0,4,1,""],uniform:[0,4,1,""]},"cpnest.parameter":{LivePoint:[0,1,1,""],rebuild_livepoint:[0,4,1,""]},"cpnest.parameter.LivePoint":{asnparray:[0,2,1,""],bounds:[0,5,1,""],copy:[0,2,1,""],dimension:[0,5,1,""],keys:[0,2,1,""],logL:[0,5,1,""],logP:[0,5,1,""],names:[0,5,1,""],values:[0,5,1,""]},"cpnest.plot":{init_plotting:[0,4,1,""],plot_chain:[0,4,1,""],plot_corner:[0,4,1,""],plot_hist:[0,4,1,""]},"cpnest.proposal":{ConstrainedLeapFrog:[0,1,1,""],DefaultProposalCycle:[0,1,1,""],DifferentialEvolution:[0,1,1,""],EnsembleEigenVector:[0,1,1,""],EnsembleProposal:[0,1,1,""],EnsembleSlice:[0,1,1,""],EnsembleSliceCorrelatedGaussian:[0,1,1,""],EnsembleSliceDifferential:[0,1,1,""],EnsembleSliceGaussian:[0,1,1,""],EnsembleSliceProposalCycle:[0,1,1,""],EnsembleStretch:[0,1,1,""],EnsembleWalk:[0,1,1,""],HamiltonianProposal:[0,1,1,""],HamiltonianProposalCycle:[0,1,1,""],LeapFrog:[0,1,1,""],Proposal:[0,1,1,""],ProposalCycle:[0,1,1,""]},"cpnest.proposal.ConstrainedLeapFrog":{check_constraint:[0,2,1,""],counter:[0,2,1,""],evolve_trajectory:[0,2,1,""],evolve_trajectory_one_step_momentum:[0,2,1,""],evolve_trajectory_one_step_position:[0,2,1,""],get_sample:[0,2,1,""],sample_trajectory:[0,2,1,""],save_trajectory:[0,2,1,""]},"cpnest.proposal.DifferentialEvolution":{get_sample:[0,2,1,""],log_J:[0,5,1,""]},"cpnest.proposal.EnsembleEigenVector":{covariance:[0,5,1,""],eigen_values:[0,5,1,""],eigen_vectors:[0,5,1,""],get_sample:[0,2,1,""],log_J:[0,5,1,""],set_ensemble:[0,2,1,""],update_eigenvectors:[0,2,1,""]},"cpnest.proposal.EnsembleProposal":{ensemble:[0,5,1,""],set_ensemble:[0,2,1,""]},"cpnest.proposal.EnsembleSlice":{log_J:[0,5,1,""]},"cpnest.proposal.EnsembleSliceCorrelatedGaussian":{covariance:[0,5,1,""],get_direction:[0,2,1,""],mean:[0,5,1,""],set_ensemble:[0,2,1,""],update_mean_covariance:[0,2,1,""]},"cpnest.proposal.EnsembleSliceDifferential":{get_direction:[0,2,1,""]},"cpnest.proposal.EnsembleSliceGaussian":{get_direction:[0,2,1,""]},"cpnest.proposal.EnsembleSliceProposalCycle":{get_direction:[0,2,1,""]},"cpnest.proposal.EnsembleStretch":{get_sample:[0,2,1,""]},"cpnest.proposal.EnsembleWalk":{Npoints:[0,5,1,""],get_sample:[0,2,1,""],log_J:[0,5,1,""]},"cpnest.proposal.HamiltonianProposal":{gradient:[0,2,1,""],hamiltonian:[0,2,1,""],inverse_mass_matrix:[0,5,1,""],kinetic_energy:[0,2,1,""],mass_matrix:[0,5,1,""],momenta_distribution:[0,5,1,""],set_ensemble:[0,2,1,""],set_integration_parameters:[0,2,1,""],unit_normal:[0,2,1,""],update_mass:[0,2,1,""],update_momenta_distribution:[0,2,1,""],update_normal_vector:[0,2,1,""],update_time_step:[0,2,1,""],update_trajectory_length:[0,2,1,""]},"cpnest.proposal.LeapFrog":{evolve_trajectory:[0,2,1,""],get_sample:[0,2,1,""]},"cpnest.proposal.Proposal":{get_sample:[0,2,1,""],log_J:[0,5,1,""]},"cpnest.proposal.ProposalCycle":{N:[0,5,1,""],add_proposal:[0,2,1,""],get_sample:[0,2,1,""],idx:[0,5,1,""],normalise_weights:[0,2,1,""],set_cycle:[0,2,1,""],set_ensemble:[0,2,1,""],weights:[0,2,1,""]},"cpnest.sampler":{HamiltonianMonteCarloSampler:[0,1,1,""],MetropolisHastingsSampler:[0,1,1,""],Sampler:[0,1,1,""],SliceSampler:[0,1,1,""],random:[0,4,1,""]},"cpnest.sampler.HamiltonianMonteCarloSampler":{insert_sample:[0,2,1,""],yield_sample:[0,2,1,""]},"cpnest.sampler.MetropolisHastingsSampler":{yield_sample:[0,2,1,""]},"cpnest.sampler.Sampler":{checkpoint:[0,2,1,""],estimate_nmcmc:[0,2,1,""],estimate_nmcmc_on_the_fly:[0,2,1,""],produce_sample:[0,2,1,""],reset:[0,2,1,""],resume:[0,2,1,""]},"cpnest.sampler.SliceSampler":{adapt_length_scale:[0,2,1,""],increase_left_boundary:[0,2,1,""],increase_right_boundary:[0,2,1,""],reset:[0,2,1,""],reset_boundaries:[0,2,1,""],yield_sample:[0,2,1,""]},cpnest:{NestedSampling:[0,0,0,"-"],cpnest:[0,0,0,"-"],logger:[0,0,0,"-"],model:[0,0,0,"-"],nest2pos:[0,0,0,"-"],parameter:[0,0,0,"-"],plot:[0,0,0,"-"],proposal:[0,0,0,"-"],sampler:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","function","Python function"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:function","5":"py:attribute"},terms:{"0157":0,"06212v1":0,"100":0,"1000":0,"1005":0,"1024":0,"1206":0,"1234":0,"1901":0,"1951":0,"2002":0,"2010":0,"2014":0,"2140":0,"398":0,"99999999":0,"abstract":0,"boolean":0,"class":[0,1],"default":0,"final":1,"float":0,"function":[0,1],"import":[0,1],"int":[0,1],"new":0,"return":[0,1],"true":0,"while":0,For:0,One:0,The:[0,1],Uses:0,Will:0,acc:0,accept:0,accord:0,acl:0,adapt:0,adapt_length_scal:0,add:0,add_file_handl:0,add_propos:0,add_stream_handl:0,adding:0,addit:0,affin:0,after:1,against:0,algorithm:[0,1],alia:0,all:0,allow:0,along:0,altern:1,analys:0,ani:0,anywher:0,approxim:0,arg:0,argument:[0,1],around:0,arrai:[0,1],array_lik:0,arxiv:0,asnparrai:0,associ:0,assum:0,autocorrel:0,autodetermin:0,avail:1,averag:0,axes:0,balanced_sampl:0,base:[0,1],bayesian:1,behav:0,best:1,between:0,beutler:0,bin:0,book:0,both:[0,1],bound:[0,1],boundari:0,broadcast:0,build:1,build_sphinx:1,built:1,burnin:0,call:[0,1],cam:0,camco:0,can:[0,1],carlo:0,center:0,chain:0,chang:0,check:0,check_constraint:0,checkpo:0,checkpoint:0,chosen:0,classmethod:0,clone:1,close:0,cnest:0,code:0,color:0,com:[0,1],command:1,commun:0,compat:1,comput:[0,1],compute_weight:0,conda:1,condit:0,connect_produc:0,constrain:0,constrainedleapfrog:0,constraint:0,consum:0,consume_sampl:0,consumer_pip:0,content:2,contour:0,contract:0,control:[0,1],conveni:0,copi:0,core:1,corner:0,correl:0,correspond:0,costrain:0,count:0,counter:0,covari:0,cpnestlogg:0,cpu_count:0,creat:[0,1],critic:0,cube:0,current:0,custom:0,cycl:0,cyclelength:0,dat:0,data:0,deafult:0,debug:0,decai:0,def:1,default_rng:0,defaultproposalcycl:0,defin:[0,1],densiti:0,deprec:0,deriv:0,design:1,detail:1,determin:0,diagnost:0,dict:0,dictionari:0,differ:0,differenti:0,differentialevolut:0,dimens:0,dimension:[0,1],direct:0,directori:0,disabl:0,discret:0,displai:[0,1],distribut:[0,1],doi:0,draw:0,draw_n_posterior:0,draw_n_posterior_mani:0,draw_posterior:0,draw_posterior_mani:0,drawn:0,due:0,dure:1,each:0,eigen_valu:0,eigen_vector:0,eigenvector:0,eigevalu:0,ellipsoid:0,elsewher:0,end:0,enemblepropos:0,energi:0,ensembl:[0,1],ensembleeigenvector:0,ensemblepropos:0,ensembleslic:0,ensembleslicecorrelatedgaussian:0,ensembleslicedifferenti:0,ensembleslicegaussian:0,ensemblesliceproposalcycl:0,ensemblestretch:0,ensemblewalk:0,equal:0,equat:0,error:0,estim:0,estimate_nmcmc:0,estimate_nmcmc_on_the_fli:0,evalu:0,eventu:0,everi:0,evid:[0,1],evidence_fil:0,evolut:0,evolv:0,evolve_trajectori:0,evolve_trajectory_one_step_momentum:0,evolve_trajectory_one_step_posit:0,exact:0,exactli:0,exampl:[0,1],except:0,exclud:0,exercis:0,exp:0,expans:0,exponenti:0,fals:0,farr:0,fft:0,file:0,filenam:0,flat:0,float32:0,float64:0,folder:0,follow:0,forc:0,forg:1,former:0,frac:0,fraction:0,frame:0,free:1,frog:0,from:[0,1],from_normalis:0,full:0,func:0,gaussian:[0,1],gener:0,get:0,get_direct:0,get_mcmc_sampl:0,get_nested_sampl:[0,1],get_posterior_sampl:[0,1],get_prior_sampl:0,get_sampl:0,get_worst_n_live_point:0,git:1,github:[0,1],given:[0,1],going:1,goodman:0,grad:0,gradient:0,greater:0,half:0,hamiltonian:0,hamiltonianmontecarlo:0,hamiltonianmontecarlosampl:0,hamiltonianpropos:0,hamiltonianproposalcycl:0,handler:0,hard:0,hast:0,have:1,header:0,helper:0,here:1,heurist:0,high:0,hist:0,histogram:0,hmc:0,host:0,html:1,http:[0,1],hypersurfac:0,idx:0,ignor:0,implement:[0,1],improv:0,in_bound:0,includ:0,increas:[0,1],increase_left_boundari:0,increase_right_boundari:0,index:1,individu:0,inequ:0,inf:0,infer:[0,1],info:0,inform:[0,1],inherit:[0,1],init_plot:0,initialis:0,input:0,insert_sampl:0,instanc:0,instanti:0,instead:0,integ:0,integr:0,interfac:1,intern:0,interpol:0,interrupt:0,interv:0,invari:0,invers:0,inverse_mass_matrix:0,iso:0,iter:0,itila:0,its:0,johnveitch:1,jump:0,karamani:0,kei:0,keyword:1,kinet:0,kinetic_energi:0,kwarg:0,larg:0,latter:0,leap:0,leapfrog:0,left:0,length:0,less:0,licens:1,lies:0,like:0,likelihood:[0,1],limit:0,line:[0,1],linewidth:0,list:0,live:[0,1],livepoint:0,log1p:0,log:[0,1],log_ev:0,log_func:0,log_integrate_log_trap:0,log_j:0,log_likelihood:[0,1],log_prior:0,log_support:0,log_wt:0,logger:2,logl:0,loglikelihood:0,loglmin:0,logp:0,logsubexp:0,logz:[0,1],longest:0,loop:0,low:0,lower:0,lowest:0,mackai:0,mai:0,main:0,make:0,manag:0,map:0,margin:[0,1],mass:0,mass_matrix:0,matplotlib:0,matrix:0,maximum:0,maxmcmc:0,mcmc:[0,1],mcmc_sampl:0,mean:[0,1],method:[0,1],metropoli:0,metropolishastingssampl:0,mhs:0,mit:1,model:[1,2],modul:[1,2],momenta:0,momenta_distribut:0,momentum:0,monro:0,mont:0,more:1,move:0,much:0,multipl:1,multipli:0,multiprocess:0,must:[0,1],mymodel:1,n_periodic_checkpoint:0,name:[0,1],ndarrai:0,ndim:0,nest2po:2,nest:[0,1],nested_sampl:0,nested_sampling_loop:0,nestedsampl:2,new_point:0,nhamiltonian:0,nlive:[0,1],nmcmc:0,non:1,none:0,normal:0,normalise_weight:0,normalised_valu:0,normalised_vau:0,note:[0,1],noth:0,nparam:0,npoint:0,npost:0,nrun:0,nsampl:0,nslice:0,nthread:0,number:[0,1],numpi:[0,1],obj:0,object:[0,1],obtain:0,offici:0,old:0,one:0,ones_lik:0,open:0,option:[0,1],org:0,other:[0,1],otherwis:0,out:0,output:0,output_fil:0,over:0,overload:0,overrid:0,packag:[1,2],page:1,parallel:0,parallelis:1,param:[0,1],paramet:[1,2],parameter:0,part:0,pass:[0,1],pdf:0,perform:1,periodic_checkpoint_interv:0,perturb:0,phy:0,pickl:0,pip:1,pipe:0,plot:2,plot_chain:0,plot_corn:0,plot_hist:0,plt:0,point:[0,1],pool:0,poolsiz:0,pos:0,posit:0,possibl:1,posterior:[0,1],potenti:0,precis:0,princip:0,prior:[0,1],prior_sampl:0,probabl:[0,1],proce:0,process:0,produc:[0,1],produce_sampl:0,producer_pip:0,product:1,profil:0,program:1,progress:0,properti:0,propos:2,proposalcycl:0,provid:1,pseudo:0,pseudorandom:0,purpos:0,pyplot:0,python3:1,python:1,quick:0,rais:0,rand:0,randint:0,random:[0,1],random_integ:0,random_sampl:0,randomli:0,rang:0,rate:0,rebuild_livepoint:0,recomput:0,record:0,redraw:0,reduc:1,reflect:0,reli:0,remain:0,repeat:0,repetit:0,repres:0,represent:0,requir:0,resampl:0,resample_mcmc_chain:0,reset:0,reset_boundari:0,result:[0,1],resum:0,resume_fil:0,ride:0,right:0,robbin:0,round:0,rule:0,run:[0,1],runmanag:0,safeti:0,sampl:[0,1],sample_prior:0,sample_trajectori:0,sampler:[1,2],satisfi:0,save:0,save_trajectori:0,scalar:0,scale:0,scratch:0,screen:0,search:1,second:0,see:[0,1],seed:[0,1],select:0,self:[0,1],server:0,set:[0,1],set_cycl:0,set_ensembl:0,set_integration_paramet:0,setup:1,setup_output:0,setup_random_se:0,setuptool:1,shape:0,share:0,shortest:0,should:0,show:0,sighandl:0,signal:0,simpl:1,simple2dmodel:1,simplest:1,singl:0,size:0,sli:0,slice:0,slicesampl:0,small:0,softwar:1,some:1,sourc:[0,1],spawn:0,sphinx:1,spline:0,start:[0,1],state:0,statist:0,step:0,stop:0,store:0,str:0,stream:0,stretch:0,string:0,strsampl:0,subclass:0,subject:0,submodul:2,surfac:0,syncmanag:0,take:0,taken:0,tau:0,test:1,than:0,them:0,thi:[0,1],thread:[0,1],through:0,tibbit:0,time:0,to_normalis:0,toler:0,trace:0,trajectori:0,trapezoid:0,tupl:0,two:[0,1],type:0,uncertainti:1,unconstrain:0,undefin:0,under:1,uniform:[0,1],uniformli:0,uniqu:0,unit:0,unit_norm:0,updat:0,update_eigenvector:0,update_mass:0,update_mean_covari:0,update_momenta_distribut:0,update_normal_vector:0,update_time_step:0,update_trajectory_length:0,upper:0,use:[0,1],used:[0,1],user:[0,1],usermodel:0,uses:[0,1],using:[0,1],usual:1,valu:0,variabl:1,vector:0,verbos:[0,1],via:1,wai:1,walk:0,warn:0,wear:0,weight:0,when:[0,1],where:0,whether:0,which:[0,1],within:0,without:0,word:0,worker_n:0,worker_sampl:0,would:0,wouldn:0,write:0,write_chain_to_fil:0,write_evidence_to_fil:0,written:0,www:0,yield:0,yield_sampl:0,you:1,zero:0},titles:["cpnest package","Welcome to CPNest\u2019s documentation!","cpnest"],titleterms:{content:0,cpnest:[0,1,2],document:1,indic:1,instal:1,introduct:1,logger:0,model:0,modul:0,nest2po:0,nestedsampl:0,output:1,packag:0,paramet:0,plot:0,propos:0,quickstart:1,retriev:1,sampler:0,submodul:0,tabl:1,welcom:1}})