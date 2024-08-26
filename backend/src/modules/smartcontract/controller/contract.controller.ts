import {
  Body,
  Controller,
  HttpCode,
  Post,
  Get,
  Patch,
  Delete,
  Request,
  Response,
  UseGuards,
  Param,
  Query,
  Req,
  Put,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { GeneralException } from 'src/modules/utility/exceptions/general.exception';
import { ErrorTypeEnum } from 'src/modules/utility/enums/error-type.enum';
import { JwtAuthGuard } from 'src/modules/authentication/guard/jwt-auth.guard';
import { verifyProofDto } from '../dto/contract-dto';
import { ContractService } from '../services/contract.service';
import { UserService } from 'src/modules/user/services/user/user.service';

@ApiTags('Smart Contract')
@Controller('app/v1/contract')
export class contractController {
  constructor(
    private readonly contractService?: ContractService,
    private readonly userService?: UserService,
  ) {}

  @Post('/verify-zkp')
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Verifying the proof.',
    description: 'This api verifies then user proof code.',
  })
  async verifyProof(@Body() body: verifyProofDto, @Request() request) {
    console.log('We are in Verify Proof section', body);

    if (body.proof === null || body.proof === undefined || body.proof === '') {
      let errorMessage = 'proof is not valid!';
      throw new GeneralException(
        ErrorTypeEnum.UNPROCESSABLE_ENTITY,
        errorMessage,
      );
    }

    return this.contractService.zpkProof(body.proof);
  }

  @Get('/get-wallet-balance')
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Balance of wallet.',
    description: 'This api returns balance of entered wallet.',
  })
  async getWalletBalance(@Request() request) {
    const userRes = await this.userService.getUserProfileByIdFromUser(
      request.user.userId || '',
    );

    const walletAddress = userRes.walletAddress || '';

    if (
      walletAddress === null ||
      walletAddress === undefined ||
      walletAddress === ''
    ) {
      let errorMessage = 'walletAddress is not valid!';
      throw new GeneralException(
        ErrorTypeEnum.UNPROCESSABLE_ENTITY,
        errorMessage,
      );
    }

    return this.contractService.getWalletBalance(walletAddress);
  }

  @Post('/request-faucet')
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Requesting faucet.',
    description:
      'This api give some faucet to user wallet address entered in website.',
  })
  async requestFaucet(@Request() request) {
    const userRes = await this.userService.getUserProfileByIdFromUser(
      request.user.userId || '',
    );

    const walletAddress = userRes.walletAddress || '';

    if (
      walletAddress === null ||
      walletAddress === undefined ||
      walletAddress === ''
    ) {
      let errorMessage = 'walletAddress is not valid!';
      throw new GeneralException(
        ErrorTypeEnum.UNPROCESSABLE_ENTITY,
        errorMessage,
      );
    }

    return this.contractService.requestFaucet(walletAddress);
  }

  /* @Post('/fetch-service')
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: '',
    description: '',
  })
  async fetchService(@Request() request) {
    return this.contractService.fetchService();
  }
  @Post('/create-service')
  @HttpCode(201)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: '',
    description: '',
  })
  async craeteService(@Request() request) {
    return this.contractService.serviceCreate();
  } */
}
