import { Injectable } from '@nestjs/common';
import { ErrorTypeEnum } from 'src/modules/utility/enums/error-type.enum';
import { GereralException } from 'src/modules/utility/exceptions/general.exception';
import { PermissionActivationStatusEnum } from '../../enums/permission-activation-status.enum';
import { UserPermission } from '../../interfaces/user-permission.interface';
import { UserPermissionRepository } from '../../repositories/user-permission.repository';

@Injectable()
export class UserPermissionService {
  private result;

  constructor(
    private readonly userPermissionRepository?: UserPermissionRepository,
  ) {}

  async insertDefaultPermissions(): Promise<any> {
    if (!(await this.userPermissionExists('full_controll'))) {
      let newAdminPermission = {
        name: 'full_controll',
        module: 'user_permission',
        label: 'system',
        routes: [],
        deletable: false,
        activationStatus: PermissionActivationStatusEnum.ACTIVATED,
        insertDate: new Date(),
        updateDate: new Date(),
      };

      await this.userPermissionRepository
        .insertPermission(newAdminPermission)
        .then((data) => {
          this.result = data;
        })
        .catch((error) => {
          let errorMessage =
            'Some errors occurred while inserting main permissions!';
          throw new GereralException(
            ErrorTypeEnum.UNPROCESSABLE_ENTITY,
            errorMessage,
          );
        });
    }

    if (!(await this.userPermissionExists('read_content'))) {
      let newUserPermission = {
        name: 'read_content',
        module: 'user_permission',
        label: 'system',
        routes: [],
        deletable: false,
        activationStatus: PermissionActivationStatusEnum.ACTIVATED,
        insertDate: new Date(),
        updateDate: new Date(),
      };

      await this.userPermissionRepository
        .insertPermission(newUserPermission)
        .then((data) => {
          this.result = data;
        })
        .catch((error) => {
          let errorMessage =
            'Some errors occurred while inserting main permissions!';
          throw new GereralException(
            ErrorTypeEnum.UNPROCESSABLE_ENTITY,
            errorMessage,
          );
        });
    }

    return this.result;
  }

  async userPermissionExists(permissionName): Promise<Boolean> {
    let foundPermission: any;
    await this.findAPermissionByName(permissionName)
      .then((data) => {
        foundPermission = data;
      })
      .catch((error) => {
        let errorMessage = 'Some errors occurred while finding a permission!';
        throw new GereralException(
          ErrorTypeEnum.UNPROCESSABLE_ENTITY,
          errorMessage,
        );
      });

    if (foundPermission) return true;
    else return false;
  }

  async insertPermissionByPanel(data, userId): Promise<any> {
    let newPermission = {
      name: data.name,
      module: data.module,
      label: data.label,
      description: data.description,
      routes: data.routes,
      insertedBy: userId,
      insertDate: new Date(),
      updatedBy: userId,
      updateDate: new Date(),
    };

    return await this.userPermissionRepository.insertPermission(newPermission);
  }

  async editPermissionByPanel(data, userId): Promise<any> {
    let foundPermission = null;
    await this.userPermissionRepository
      .findAPermissionById(data.permissionId)
      .then((data) => {
        foundPermission = data;
      })
      .catch((error) => {
        let errorMessage = 'Some errors occurred while finding a permission!';
        throw new GereralException(ErrorTypeEnum.NOT_FOUND, errorMessage);
      });

    if (foundPermission) {
      foundPermission.name = data.name;
      foundPermission.module = data.module;
      foundPermission.label = data.label;
      foundPermission.description = data.description;
      foundPermission.routes = data.routes;
      foundPermission.deletable = data.deletable;
      foundPermission.updateDate = new Date();
      foundPermission.updatedBy = userId;

      await this.userPermissionRepository
        .editPermission(foundPermission._id, foundPermission)
        .then((data) => {
          this.result = data;
        })
        .catch((error) => {
          let errorMessage = 'Some errors occurred while editing a permission!';
          throw new GereralException(
            ErrorTypeEnum.UNPROCESSABLE_ENTITY,
            errorMessage,
          );
        });
    }

    return this.result;
  }

  async findAPermissionByName(
    permissionName,
  ): Promise<UserPermission | undefined> {
    await this.userPermissionRepository
      .findAPermissionByName(permissionName)
      .then((data) => {
        this.result = data;
      })
      .catch((error) => {
        let errorMessage = 'Some errors occurred while finding a permission!';
        throw new GereralException(ErrorTypeEnum.NOT_FOUND, errorMessage);
      });

    return this.result;
  }

  async findPermissionByModule(
    permissionModule,
  ): Promise<UserPermission | undefined> {
    await this.userPermissionRepository
      .findPermissionByModule(permissionModule)
      .then((data) => {
        this.result = data;
      })
      .catch((error) => {
        let errorMessage = 'Some errors occurred while finding a permission!';
        throw new GereralException(ErrorTypeEnum.NOT_FOUND, errorMessage);
      });

    return this.result;
  }

  async findAPermissionByLabel(
    permissionLabel,
  ): Promise<UserPermission | undefined> {
    await this.userPermissionRepository
      .findAPermissionByLabel(permissionLabel)
      .then((data) => {
        this.result = data;
      })
      .catch((error) => {
        let errorMessage = 'Some errors occurred while finding a permission!';
        throw new GereralException(ErrorTypeEnum.NOT_FOUND, errorMessage);
      });

    return this.result;
  }

  async changeActivationStatusOfPermission(data, userId): Promise<any> {
    let foundPermission = null;
    await this.userPermissionRepository
      .findAPermissionById(data._id)
      .then((data) => {
        foundPermission = data;
      })
      .catch((error) => {
        let errorMessage = 'Some errors occurred while finding a permission!';
        throw new GereralException(ErrorTypeEnum.NOT_FOUND, errorMessage);
      });

    if (foundPermission) {
      foundPermission.activationStatus = data.activationStatus;
      foundPermission.activationStatusChangedBy = userId;
      foundPermission.activationStatusChangeDate = new Date();
      foundPermission.updatedBy = userId;
      foundPermission.updateDate = new Date();

      await this.userPermissionRepository
        .editPermission(data._id, foundPermission)
        .then((data) => {
          this.result = data;
        })
        .catch((error) => {
          let errorMessage = 'Some errors occurred while editing a permission!';
          throw new GereralException(
            ErrorTypeEnum.UNPROCESSABLE_ENTITY,
            errorMessage,
          );
        });
    } else {
      let errorMessage =
        'Some errors occurred while editing a permission! Permission not found';
      throw new GereralException(
        ErrorTypeEnum.UNPROCESSABLE_ENTITY,
        errorMessage,
      );
    }

    return this.result;
  }

  async deletePermission(data, userId): Promise<any> {
    let foundPermission = null;
    await this.userPermissionRepository
      .findAPermissionById(data._id)
      .then((data) => {
        foundPermission = data;
      })
      .catch((error) => {
        let errorMessage = 'Some errors occurred while finding a permission!';
        throw new GereralException(ErrorTypeEnum.NOT_FOUND, errorMessage);
      });

    if (foundPermission) {
      foundPermission.isDeleted = data.isDeleted;
      foundPermission.deletionReason = data.deletionReason;
      foundPermission.deletedBy = userId;
      foundPermission.deleteDate = new Date();

      await this.userPermissionRepository
        .editPermission(data._id, foundPermission)
        .then((data) => {
          this.result = data;
        })
        .catch((error) => {
          let errorMessage = 'Some errors occurred while editing a permission!';
          throw new GereralException(
            ErrorTypeEnum.UNPROCESSABLE_ENTITY,
            errorMessage,
          );
        });
    } else {
      let errorMessage =
        'Some errors occurred while editing a permission! Permission not found';
      throw new GereralException(
        ErrorTypeEnum.UNPROCESSABLE_ENTITY,
        errorMessage,
      );
    }

    return this.result;
  }
}
